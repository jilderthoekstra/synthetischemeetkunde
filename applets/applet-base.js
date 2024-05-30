class AppletBase {   
    constructor(filename, appId, container, maxState) {
        this.container = container;
        let appletParams = {
            id: appId,
            width: 1600,
            height: 900,
            filename: filename,
            scaleContainerClass: 'slides',
            autoHeight: false,
            useBrowserForJS: true,
            preventFocus: true,
            borderColor: '#FFFFFF',
            borderRadius: 0,
            appletOnLoad: this.appletLoaded.bind(this),
        };

        this.applet = new GGBApplet(appletParams, true);
        this.applet.inject(container);
        this.screenInfo = { min_x: 0, min_y: 0, max_x: 0, max_y: 0, width: 0, height: 0, aspectRatio: 0 };
        this.maxState = maxState;
        this.state = 0;
        this.lastState = 0;
        this.isAnimating = false;
        this.frameDuration = 1000/60;
        this.easingFunctions = {
            linear: this.linearEasing,
            easeOutExpo: this.easeOutExpo,
            easeOutElastic: this.easeOutElastic,
            easeOutBounce: this.easeOutBounce,
            easeInOutQuint: this.easeInOutQuint,
            easeInOutBack: this.easeInOutBack, 
        };
        
        this.initStates();
    }

    get isNextState() {
        return this.lastState < this.state;
    }

    get isPreviousState() {
        return this.lastState > this.state;
    }

    appletLoaded() {
        this.appletObject = this.applet.getAppletObject();
        //this.appletObject.evalCommand('ShowAxes(true)');
        this.setupBounds();
        this.appletObject.setVisible('buttonPrev', false);
        this.appletObject.setVisible('buttonNext', false);
        this.appletObject.registerClickListener(this.onClick.bind(this));
    }

    setupBounds() {
        this.appletObject.evalCommand('screenBounds = Sequence(Corner(n),n,1,5)');
        this.appletObject.setAuxiliary('screenBounds', true);
        this.appletObject.setVisible('screenBounds', false);
        this.appletObject.registerObjectUpdateListener("screenBounds", this.onBoundsUpdate.bind(this));
        this.onBoundsUpdate();
    }

    onBoundsUpdate() {
        let inputString = this.appletObject.getValueString('screenBounds');
        var regex = /\((-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\)/g;
        var matches = [];
        var match;
        while ((match = regex.exec(inputString)) !== null) {
            matches.push([parseFloat(match[1]), parseFloat(match[2])]);
        }
        this.screenInfo.min_x = matches[0][0];
        this.screenInfo.min_y = matches[0][1];
        this.screenInfo.max_x = matches[2][0];
        this.screenInfo.max_y = matches[2][1];
        this.screenInfo.width = matches[4][0];
        this.screenInfo.height = matches[4][1];
        this.screenInfo.aspectRatio = this.screenInfo.width / this.screenInfo.height;
    }
    

    onClick(objectName) {
        switch (objectName) {
            case 'buttonPrev': this.prev(); break;
            case 'buttonNext': this.next(); break;
        }
    }

    prev() {
        if (this.isAnimating) {
            return false;
        }
    
        let gotoPrevSlide = false
        if (this.state == 0) { 
            gotoPrevSlide = true; 
        } else {
            this.state -= 1;
            this.executeState();
        }
        return gotoPrevSlide;
    }

    next() {
        if (this.isAnimating) {
            return false;
        }

    
        let gotoNextSlide = false;
        if (this.state >= this.maxState) { 
            gotoNextSlide = true; 
        } else {
            this.state += 1;
            this.executeState();
        }
        return gotoNextSlide;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    calculateZoomTarget(min_x, min_y, max_y, centered) {
        let axis_height = max_y - min_y;
        let calculated_min_x = (!centered) ? min_x : min_x - (this.screenInfo.aspectRatio * axis_height) * 0.5;
        const zoomTarget = { 
            min_x: calculated_min_x, 
            min_y: min_y, 
            max_x: calculated_min_x + this.screenInfo.aspectRatio * axis_height,
            max_y: max_y };
        return zoomTarget;    
    }

    setZoom(min_x, min_y, max_y, centered) {
        const zoomTarget = this.calculateZoomTarget(min_x, min_y, max_y, centered);
        this.appletObject.setCoordSystem(zoomTarget.min_x, zoomTarget.max_x , zoomTarget.min_y, zoomTarget.max_y); 
    }
    
    async setZoomAnimated(min_x, min_y, max_y, centered, easing, duration) {
        const zoomTarget = this.calculateZoomTarget(min_x, min_y, max_y, centered);
        const easingFunction = this.easingFunctions[easing];
        const zoomStart = Object.assign({}, this.screenInfo);    
        const currentZoom = Object.assign({}, this.screenInfo);
    
        let t = 0;
        let deltaTime = 0;
        let previousTime = performance.now();
        while (t < 1.0) {
            const currentTime = performance.now();
            deltaTime += currentTime - previousTime;
            previousTime = currentTime;
            t = deltaTime / duration;
    
            if (t > 1.0){
                t = 1.0;
            } else {
                let val = easingFunction(t);
                currentZoom.min_x = this.lerp(zoomStart.min_x, zoomTarget.min_x, val);
                currentZoom.min_y = this.lerp(zoomStart.min_y, zoomTarget.min_y, val);
                currentZoom.max_x = this.lerp(zoomStart.max_x, zoomTarget.max_x, val);
                currentZoom.max_y = this.lerp(zoomStart.max_y, zoomTarget.max_y, val); 
                this.appletObject.setCoordSystem(currentZoom.min_x, currentZoom.max_x , currentZoom.min_y, currentZoom.max_y);
    
                const remainingTime = this.frameDuration - (performance.now() - currentTime);
                if (remainingTime > 0) {
                    await this.delay(remainingTime);
                }
            }               
        }
        this.appletObject.setCoordSystem(zoomTarget.min_x, zoomTarget.max_x , zoomTarget.min_y, zoomTarget.max_y);
    }
    
    async animateFloat(name, start, end, easing, duration) {
        const easingFunction = this.easingFunctions[easing];
        let t = 0;
        let deltaTime = 0;
        let previousTime = performance.now();
        while (t < 1.0) {
            const currentTime = performance.now();
            deltaTime += currentTime - previousTime;
            previousTime = currentTime;
            t = deltaTime / duration;
    
            if (t > 1.0){
                t = 1.0;
            } else {
                let progress = easingFunction(t);
                let value = this.lerp(start, end, progress);
                this.appletObject.setValue(name, value);
                const remainingTime = this.frameDuration - (performance.now() - currentTime);
                if (remainingTime > 0) {
                    await this.delay(remainingTime);
                }
            }
        }
        this.appletObject.setValue(name, end);
    }

    lerp(a, b, t) {
        return a + (b-a) * t;
    }
    
    linearEasing(x) {
        return x;
    
    }
    easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
    
    easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2; 
    }
    
    easeOutElastic(x) {
        const c4 = (2 * Math.PI) / 3;
        
        return x === 0
          ? 0
          : x === 1
          ? 1
          : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    }
    
    easeOutBounce(x) {
        const n1 = 7.5625;
        const d1 = 2.75;
        
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
    }
    
    easeInOutBack(x) {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        
        return x < 0.5
          ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
          : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }

    setText(name, text) {
        this.appletObject.setTextValue(name, text);
    }

    setObjectsVisible(objects, s){
        for (let obj of objects) {
            this.appletObject.setVisible(obj, s);
        }
    }

    resetHighlight(names) {
        for (let name of names) {
            this.appletObject.setColor(name, 0, 0, 0);
            this.appletObject.setLineThickness(name, -1);
        }
    }

    setHighlightBlack(names) {
        for (let name of names) {    
            this.appletObject.setColor(name, 0, 0, 0);
            this.appletObject.setLineThickness(name, 13);
        }
    }

    setHighlightBlue(names) {
        for (let name of names) {  
            this.appletObject.setColor(name, 68, 114, 196);
            this.appletObject.setLineThickness(name, 13);
        }
    }

    setHighlightGreen(names) {
        for (let name of names) {  
            this.appletObject.setColor(name, 0, 153, 0);
            this.appletObject.setLineThickness(name, 13);
        }
    }

    setHighlightRed(names) {
        for (let name of names) {  
            this.appletObject.setColor(name, 219, 19, 7);
            this.appletObject.setLineThickness(name, 13);
        }
    }

    setHighlightPink(names) {
        for (let name of names) {  
            this.appletObject.setColor(name, 255, 153, 204);
            this.appletObject.setLineThickness(name, 13);
        }
    }

    setHighlightVibrantBlue(names) {
        for (let name of names) {  
            this.appletObject.setColor(name, 0, 153, 255);
            this.appletObject.setLineThickness(name, 13);
        }
    }

    degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    async fadePolygon(name, start, end, easing, duration) {
        const easingFunction = this.easingFunctions[easing];   
        let t = 0;
        let deltaTime = 0;
        let previousTime = performance.now();
        if (end === 0) { this.appletObject.setLineThickness(name, 0); }
        while (t < 1.0) {
            const currentTime = performance.now();
            deltaTime += currentTime - previousTime;
            previousTime = currentTime;
            t = deltaTime / duration;

            if (t > 1.0){
                t = 1.0;
            } else {
                let progress = easingFunction(t);
                let transparency = this.lerp(start, end, progress);
                this.appletObject.setFilling(name, transparency);
                
                // Calculate the time remaining to stay within the desired frame rate
                const remainingTime = this.frameDuration - (performance.now() - currentTime);

                if (remainingTime > 0) {
                    await this.delay(remainingTime);
                }
            }
        }
        this.appletObject.setFilling(name, end);
        if (end > 0.0) { this.appletObject.setLineThickness(name, -1); }
    }

    initStates() {
        this.states = { }
    }

    async executeState() {
        const currentState = this.states[this.state];
        if (currentState) {
            this.isAnimating = true;
            await currentState();
            this.isAnimating = false;
            this.lastState = this.state;
        } else {
            console.error(`State ${this.state} not found`);
        }
    }
}
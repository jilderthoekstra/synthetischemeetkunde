    // Initialize Reveal.js
    Reveal.initialize({
        width: 1600,
        height: 900,
        margin:0,
        controls: true,
        progress: false,
        history: true,
        transition: 'slide',
        slideNumber: false,
        autoAnimate: false,
        touch:false,
        keyboard: {
                27: null, // disable ESC
                32: null, // disable space
                35: null,
                36: null,
                33: this.prev.bind(),
                37: this.prev.bind(),
                34: this.next.bind(),
                39: this.next.bind()
            },        
        fragment: {
            transition: 'none'
        },
    });

    function prev() {
        if (activeApplet == null || activeApplet.prev()) {
            Reveal.prev();
        }
    }

    function next() {
        if (activeApplet == null || activeApplet.next()) {
            Reveal.next();
        }
    }

    function updateActiveApplet(slideIndex) {
        switch (slideIndex) {
            case 2: activeApplet = applets['regular-polygon']; break;
            case 3: activeApplet = applets['triangle']; break;
            case 4: activeApplet = applets['square']; break;
            case 5: activeApplet = applets['hexagon']; break;
            case 6: activeApplet = applets['viete']; break;
            case 7: activeApplet = applets['pentagon']; break;
            default: activeApplet = null; break;
        }
    }

    var isPageUpPressed = false;
    var isPageDownPressed = false;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'PageUp' || event.key === 'PageDown') {
            event.stopPropagation();
            event.preventDefault();

            if (event.key === 'PageUp' && !isPageUpPressed) {
                prev();
            } else if (event.key === 'PageDown' && !isPageDownPressed) {
                next();
            }
        }
    }, true);

    document.addEventListener('keyup', function(event) {
        if (event.key === 'PageUp' || event.key === 'PageDown') {
            event.stopPropagation();
            event.preventDefault();
            
            if (event.key === 'PageUp') {
                isPageUpPressed = false;
            } else if (event.key === 'PageDown') {
                isPageDownPressed = false;
            }
        }
    }, true);

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.navigate-left').addEventListener('click', function(event) {
            event.preventDefault();
            prev();
        });      
        document.querySelector('.navigate-right').addEventListener('click', function(event) {
            event.preventDefault();
            next();
        });             
    });

    let applets = {};
    let activeApplet = null;
    
    window.addEventListener('load', () => {
        applets['regular-polygon'] = new AppletRegularPolygon('regular-polygon');
        applets['triangle'] = new AppletTriangle('triangle');
        applets['square'] = new AppletSquare('square');
        applets['hexagon'] = new AppletHexagon('hexagon');
        applets['viete'] = new AppletViete('viete');
        applets['pentagon'] = new AppletPentagon('pentagon');

        updateActiveApplet(Reveal.getIndices().h);
        
        Reveal.on('slidechanged', event => {
            updateActiveApplet(event.indexh);
        });
    });
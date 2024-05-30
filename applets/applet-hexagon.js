class AppletHexagon extends AppletBase {
    constructor(container) {
        super('./applets/applet-hexagon.ggb', 'appletHexagon', container, 4);

        this.appLines = {
            "stap1": String.raw`\text{\textcolor{myblue}{Stap 1:}\textcolor{mydarkgray}{ Teken 5 driehoeken die congruent zijn aan de orginele. }}\\`,
            "zeshoek_congruent": String.raw`\textcolor{myred}{\Delta rood} \cong \textcolor{myblue}{\Delta blauw}\\`,
            "zeshoek_hoek": String.raw`\textcolor{mydarkgray}{\angle zeshoek = 60\degree+60\degree = 120\degree}`,
            //"stap2": String.raw`\text{\textcolor{myblue}{Stap 2:}\textcolor{mydarkgray}{Teken diagonalen door het midden van de lijnstukken.}}`,
        }

        this.hexagonCornersOutside = ["α", "β", "δ", "ε", "η", "θ", "κ", "λ", "ν", "ξ", "ρ", "σ"];
    }

    initStates() {
        super.initStates();
        this.states = {
            0: async () => {
                this.setZoomAnimated(0, -1, 0.3, true, 'easeInOutQuint', 500);
                this.setObjectsVisible(['tekst1'], false);
                this.hidePolygonAndPoints();
            },
            1: async () => {
                this.setText('tekst1', this.appLines['stap1']);
                this.setObjectsVisible(['tekst1'], true);
                if (this.isNextState) {
                    await this.fadeInHexagon();
                }
            },
            2: () => {
                this.setText('tekst1', this.appLines['zeshoek_congruent']);
                this.hideHexagonCorners();
                this.hideHexagonLines();
            },
            3: async () => {
                let points = ["M", "P_{0}", "P_{2}", "P_{4}", "P_{6}", "P_{8}", "P_{10}"];
                for (let point of points) {
                    this.appletObject.setVisible(point, true);
                } 
    
                this.setText('tekst1', this.appLines['zeshoek_congruent']);            
                this.appletObject.setVisible('zeshoek', false);
                this.showHexagon();
                this.hideHexagonFinalCorners();
                if (this.isNextState) {
                    await this.showHexagonCorners();
                    await this.showHexagonLines();
                } else {
                    for (let corner of this.hexagonCornersOutside) {
                        this.appletObject.setVisible(corner, true);
                    }
    
                    for (let i = 1; i < 7; i++) {
                        let cornerName = `zeshoek_{hoek${i}}`;
                        this.appletObject.setVisible(cornerName, false);        
                    }
                }
            },
            4: async () => {
                this.hideHexagonCorners();
                this.hideHexagonTriangles();
                this.setObjectsVisible(['zeshoek'], true);
                this.setText('tekst1', this.appLines['zeshoek_hoek']);
                this.showHexagonFinalCorners();
        
                let _points = ["M", "P_{0}", "P_{2}", "P_{4}", "P_{6}", "P_{8}", "P_{10}"];
                for (let point of _points) {
                    this.appletObject.setVisible(point, false);
                }
            }
        }
    }

    hideHexagonCorners() {
        for (let corner of this.hexagonCornersOutside) {
            this.appletObject.setVisible(corner, false);
        }
    }
    
    async showHexagonCorners() {
        for (let corner of this.hexagonCornersOutside) {
            this.appletObject.setVisible(corner, true);
            await this.delay(100);
        }
    }

    hideHexagonFinalCorners() {
        for (let i = 1; i < 7; i++) {
            let cornerName = `zeshoek_{hoek${i}}`;
            this.appletObject.setVisible(cornerName, false);        
        }
    }
    
    showHexagonFinalCorners() {
        for (let i = 1; i < 7; i++) {
            let cornerName = `zeshoek_{hoek${i}}`;
            this.appletObject.setVisible(cornerName, true);
        }
    }
    
    hideHexagonLines() {
        for (let i = 0; i < 7; i++) {
            let lineName = `P_{${(i*2)%12}#${(i*2+2)%12}}`;
            this.appletObject.setVisible(lineName, false);
        }
    }
    
    async showHexagonLines() {
        for (let i = 0; i < 6; i++) {
            let lineName = `P_{${(i*2)%12}#${(i*2+2)%12}}`;
            this.appletObject.setVisible(lineName, true);
            await this.delay(100);
        }
    }
    
    hideHexagonTriangles() {
        for (let i = 0; i < 6; i++) {
            let name = `driehoek6_{${i+1}}`;
            this.appletObject.setVisible(name, false);
        }    
    }
    
    hidePolygonAndPoints() {
        let points = ["P_{0}", "P_{2}", "P_{4}", "P_{6}"];
        for (let point of points) {
            this.appletObject.setVisible(point, false);
        }
    
        for (let i = 1; i < 6; i++) {
            let name = `driehoek6_{${i+1}}`;
            this.appletObject.setVisible(name, false);
        }    
    }
    
    showHexagon() {
        for (let i = 0; i < 6; i++) {
            let name = `driehoek6_{${i+1}}`;
            this.appletObject.setVisible(name, true);
        }
    }
    
    async fadeInHexagon() {
        await this.setZoomAnimated(-3.4, -1, 1.5, false, 'easeInOutQuint', 500);
        await this.delay(500);
        for (let i = 1; i < 6; i++) {
            let name = `driehoek6_{${i+1}}`;
            this.appletObject.setFilling(name, 0);
            this.appletObject.setLineThickness(name, 0);
            this.appletObject.setVisible(name, true);
        }
    
        for (let i = 1; i < 6; i++) {
            let name = `driehoek6_{${i+1}}`;
            await this.fadePolygon(name, 0, 0.5, 'easeInOutQuint', 200);
        }
        
        let points = ["P_{0}", "P_{2}", "P_{4}", "P_{6}"];
        for (let point of points) {
            this.appletObject.setVisible(point, true);
            await this.delay(200);
        }
    }
}
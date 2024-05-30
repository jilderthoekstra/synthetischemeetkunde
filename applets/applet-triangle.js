class AppletTriangle extends AppletBase {
    constructor(container) {
        super('./applets/applet-triangle.ggb', 'appletTriangle', container, 10);
    }

    appletLoaded() {
        super.appletLoaded();
        this.setZoom(0.5, -0.4, 1.4, true);
    }

    initStates() {
        super.initStates();
        this.states = {
            0: async () => {
                this.setObjectsVisible(['driehoek'], true);
                this.setObjectsVisible(['A', 'B', 'AB', 'tekstTekenenKop_{1}', 'tekstStap_{1}'], false);
                this.fadePolygon('driehoek', 0, 0.5, 'easeInOutQuint', 500);
                await this.setZoomAnimated(0.5, -0.4, 1.4, true, 'easeInOutQuint', 500);
            },
            1: async () => {
                if (this.lastState < this.state) {
                    this.fadePolygon('driehoek', 0.5, 0, 'easeInOutQuint', 500);
                    await this.setZoomAnimated(-2.6, -0.8, 1.8, false, 'easeInOutQuint', 500);
                }
                this.setObjectsVisible(['driehoek', 'AC', 'BC','cirkel_{A}', 'cirkel_{B}', 'tekstStap_{2}'], false);
                this.setObjectsVisible(['A', 'B', 'AB', 'tekstTekenenKop_{1}', 'tekstStap_{1}'], true);
                this.appletObject.evalCommand("SetDecoration(AB, 0)");
                this.appletObject.evalCommand("SetDecoration(AC, 0)");
                this.appletObject.evalCommand("SetDecoration(BC, 0)");       
                this.setHighlightBlack(['AB']);
            },
            2: () => {
                this.setObjectsVisible(['C', 'tekstStap_{1}', 'tekstStap_{3}', 'tekstStap_{4}'], false);
                this.setObjectsVisible(['cirkel_{A}', 'cirkel_{B}', 'tekstStap_{2}'], true);
                this.resetHighlight(['AB']);
                this.setHighlightBlue(['cirkel_{A}']);
                this.setHighlightGreen(['cirkel_{B}']);
            },
            3: async () => {
                if (this.lastState > this.state) { 
                    await this.fadePolygon('driehoek', 5.0, 0, 'easeInOutQuint', 500);
                }
                this.setObjectsVisible(['C', 'tekstStap_{2}', 'tekstTekenenKop_{2}', 'driehoek'], false);
                this.setObjectsVisible(['C', 'AC', 'BC', 'tekstStap_{3}', 'tekstStap_{4}', 'cirkel_{A}', 'cirkel_{B}', 'tekstTekenenKop_{1}'], true);
                this.resetHighlight(['cirkel_{A}', 'cirkel_{B}']);
                this.setHighlightBlue(['AC']);
                this.setHighlightGreen(['BC']);
            },
            4: async () => {
                this.setObjectsVisible(['cirkel_{A}', 'cirkel_{B}', 'tekstTekenenKop_{1}', 'tekstBewijs1_{1}', 'tekstStap_{3}', 'tekstStap_{4}', false]);
                this.setObjectsVisible(['tekstTekenenKop_{2}', 'driehoek'], true);
                this.resetHighlight(['AC', 'BC']);
                await this.fadePolygon('driehoek', 0, 0.5, 'easeInOutQuint', 500);
            },
            5: async () => {
                if (this.lastState < this.state) { 
                    await this.fadePolygon('driehoek', 5.0, 0, 'easeInOutQuint', 500);
                }
                this.setObjectsVisible(['driehoek', 'tekstBewijs1_{2}', 'cirkel_{A}'], false);
                this.setObjectsVisible(['tekstBewijs1_{1}'], true);
                this.resetHighlight(['AB', 'AC']); 
            },
            6: () => {
                this.setObjectsVisible(['tekstBewijs1_{1}', 'cirkel_{B}', 'tekstBewijs1_{3}'], false);
                this.setObjectsVisible(['cirkel_{A}', 'tekstBewijs1_{2}'], true);
                this.setHighlightRed(['cirkel_{A}']);
                this.setHighlightBlue(['AB']);
                this.setHighlightGreen(['AC']);
                this.resetHighlight(['BC']);
            },
            7: () => {
                this.setObjectsVisible(['cirkel_{A}', 'tekstBewijs1_{2}', 'tekstBewijs1_{4}'], false);
                this.setObjectsVisible(['cirkel_{B}', 'tekstBewijs1_{3}'], true);
                this.resetHighlight(['AC']);
                this.setHighlightRed(['cirkel_{B}']);
                this.setHighlightBlue(['AB']);
                this.setHighlightGreen(['BC']);
                this.appletObject.evalCommand("SetDecoration(AB, 0)");
                this.appletObject.evalCommand("SetDecoration(AC, 0)");
                this.appletObject.evalCommand("SetDecoration(BC, 0)");                
            },
            8: () => {
                this.setObjectsVisible(['cirkel_{B}', 'tekstBewijs1_{3}', 'tekstBewijs2_{1}'], false);
                this.setObjectsVisible(['tekstBewijs1_{4}'], true);
                this.setHighlightBlue(['AB', 'AC', 'BC']);
                this.appletObject.evalCommand("SetDecoration(AB, 1)");
                this.appletObject.evalCommand("SetDecoration(AC, 1)");
                this.appletObject.evalCommand("SetDecoration(BC, 1)"); 
            },
            9: () => {
                this.resetHighlight(['AB', 'AC', 'BC']);
                this.setObjectsVisible(['α', 'β', 'γ','tekstBewijs1_{4}', 'tekstBewijs3_{1}'], false);
                this.setObjectsVisible(['tekstBewijs1_{1}', 'tekstBewijs2_{1}'], true);
            },
            10: () => {
                this.setObjectsVisible(['α', 'β', 'γ', 'tekstBewijs3_{1}'], true);
            }
        }
    }
}
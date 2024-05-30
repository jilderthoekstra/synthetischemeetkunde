class AppletRegularPolygon extends AppletBase {
    constructor(container) {
        super('./applets/applet-regular-polygon.ggb', 'appletRegularPolygon', container, 5);
    }

    initStates() {
        super.initStates();
        this.states = {
            0: () => {
                this.setObjectsVisible(['tekstPoint_{1}'], false);
            },
            1: () => {
                this.setObjectsVisible(['tekstPoint_{1}'], true);
                this.setObjectsVisible(['tekstPoint_{2}'], false);
            },
            2: () => {
                this.setObjectsVisible(['tekstPoint_{2}'], true);
                this.setObjectsVisible(['tekstPoint_{3}'], false);
            },
            3: () => {
                this.setObjectsVisible(['tekstPoint_{3}'], true);
                this.setObjectsVisible(['tekstPoint_{4}'], false);
            },
            4: () => {
                this.setObjectsVisible(['tekstPoint_{4}'], true);
                this.setObjectsVisible(['tekstPoint_{5}'], false);
            },
            5: () => {
                this.setObjectsVisible(['tekstPoint_{5}'], true);
            }, 
            
        }
    }
}
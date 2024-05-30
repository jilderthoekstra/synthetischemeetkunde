class AppletViete extends AppletBase {
    constructor(container) {
        super('./applets/applet-viete.ggb', 'appletViete', container, 25);

        this.appLines = Object.freeze({
            "gegeven_1": String.raw`\textcolor{mydarkgray}{\text{Gegeven \textbf{AB = BC = CD}}}\\`,
            "gegeven_2.1": String.raw`\textcolor{mydarkgray}{\text{Punten \textbf{A en C} liggen op 1 lijn.\\Punten A, B en D liggen ook op 1 lijn.}}\\`,   
            "gegeven_2.2": String.raw`\textcolor{mydarkgray}{\text{Punten A en C liggen op 1 lijn.\\Punten \textbf{A, B en D} liggen ook op 1 lijn.}}\\`,    
            "BewijsHoekenVraag": String.raw`\textcolor{mydarkgray}{\text{Toon aan: Hoek \textcolor{mygreen}{groen 2α is} en hoek \textcolor{myblue}{blauw 3α is.}}}\\`,
            "BewijsHoeken1.1": String.raw`\textcolor{mydarkgray}{\angle{BAC} = \textcolor{myred}{\angle{ACB}} \text{ (gelijkbenig)}}\\`,
            "BewijsHoeken1.2": String.raw`\textcolor{mydarkgray}{\angle{BAC} = \angle{ACB} \text{ (gelijkbenig)}\\\textcolor{mypink}{\angle{ABC}} = 180° - 2α \text{ (hoekensom \Delta)}}\\`,
            "BewijsHoeken1.3": String.raw`\textcolor{mydarkgray}{\angle{BAC} = \angle{ACB} \text{ (gelijkbenig)}\\\angle{ABC} = 180°-2α \text{ (hoekensom \Delta)}\\\textcolor{mygreen}{\angle{CBD}} = 2α \text{ (gestrekte hoek)}}\\`,
            "BewijsHoeken1.4": String.raw`\textcolor{mydarkgray}{\angle{BAC} = \angle{ACB} \text{ (gelijkbenig)}\\\angle{ABC} = 180°-2α \text{ (hoekensom \Delta)}\\\angle{CBD} = 2α \text{ (gestrekte hoek)}\\\textcolor{mygreen}{\angle{BDC}} = 2α \text{ (gelijkbenig)}}\\`,
            "BewijsHoeken1.5": String.raw`\textcolor{mydarkgray}{\angle{BAC} = \angle{ACB} \text{ (gelijkbenig)}\\\angle{ABC} = 180°-2α \text{ (hoekensom \Delta)}\\\angle{CBD} = 2α \text{ (gestrekte hoek)}\\\angle{BDC} = 2α \text{ (gelijkbenig)}\\\textcolor{myvibrantblue}{\angle{BCD}} = 180°-2α \text{ (hoekensom \Delta)}}`,
            "BewijsHoeken1.6": String.raw`\textcolor{mydarkgray}{\angle{BAC} = \angle{ACB} \text{ (gelijkbenig)}\\\angle{ABC} = 180°-2α \text{ (hoekensom \Delta)}\\\angle{CBD} = 2α \text{ (gestrekte hoek)}\\\angle{BDC} = 2α \text{ (gelijkbenig)}\\\angle{BCD} = 180°-2α \text{ (hoekensom \Delta)}\\\textcolor{myblue}{\angle{C}} = 3α \text{ (gestrekte hoek)}\\\textcolor{myblue}{\hspace{11em}\tiny\blacksquare}}`,
            "hoek36": String.raw`\textcolor{mydarkgray}{\text{We gaan nu de hoek α = 36° bekijken}}`,
            "hoekD": String.raw`\textcolor{mydarkgray}{\textcolor{myblue}{\angle{D}} = 180° \text{ (gestrekte hoek)}\\\text{We zien nu al 2 hoeken voor een 5-hoek.}}`,
            "lengteBD": String.raw`\textcolor{mydarkgray}{\text{Met geogebra zien we gelijk de lengte van BD. Maar wat\\als we geen geogebra hadden, hoe bepalen we BD?}}`,
            "gelijkvormigheid_1": String.raw`\textcolor{mydarkgray}{\text{We kunnen dit met gelijkvormigheid doen.}}`,
            "gelijkvormigheid_2": String.raw`\textcolor{mydarkgray}{\Delta CBD \cong \Delta AB(D) \text{ (rotatie 108°)}\\\textcolor{myred}{\Delta ADC} \sim \textcolor{myblue}{\Delta AB(D)} \text{ (hh)}}`,
            "Bewijs_1.1": String.raw`\textcolor{mydarkgray}{\text{We gegeven \textbf{BD} de waarde X als lengte.}}`,
            "Bewijs_1.2": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{\textcolor{myblue}{AD}}{\textcolor{mygreen}{CB}}=\frac{CD}{BD} \text{ (gelijkvormig)}}`,
            "Bewijs_1.3": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{\textcolor{myblue}{CD}}{\textcolor{mygreen}{BD}} \text{ (gelijkvormig)}}`,
            "Bewijs_1.4": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{\textcolor{myblue}{1+x}}{\textcolor{mygreen}{1}}=\frac{1}{x}}`,
            "Bewijs_1.5": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{1+x}{1}=\frac{\textcolor{myblue}{1}}{\textcolor{mygreen}{x}}}`,
            "Bewijs_1.6": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{1+x}{1}=\frac{1}{x}\Rightarrow x(x+1)=1}`,
            "Bewijs_1.7": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{1+x}{1}=\frac{1}{x}\Rightarrow x(x+1)=1\Rightarrow x²+x-1=0}`,
            "Bewijs_1.8": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{1+x}{1}=\frac{1}{x}\Rightarrow x(x+1)=1\Rightarrow x²+x-1=0\\\Rightarrow\frac{-1\pm\sqrt{(-1)^2-4\cdot1\cdot(-1)}}{2\cdot1}}`,
            "Bewijs_1.9": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{1+x}{1}=\frac{1}{x}\Rightarrow x(x+1)=1\Rightarrow x²+x-1=0\\\Rightarrow\frac{-1\pm\sqrt{(-1)^2-4\cdot1\cdot(-1)}}{2\cdot1}\\\Rightarrow\frac{-1\pm\sqrt{5}}{2}}`,
            "Bewijs_1.10": String.raw`\textcolor{mydarkgray}{\text{We gegeven BD de waarde X als lengte.}\\\frac{AD}{CB}=\frac{CD}{BD} \text{ (gelijkvormig)}\\\Rightarrow\frac{1+x}{1}=\frac{1}{x}\Rightarrow x(x+1)=1\Rightarrow x²+x-1=0\\\Rightarrow\frac{-1\pm\sqrt{(-1)^2-4\cdot1\cdot(-1)}}{2\cdot1}\\\Rightarrow\frac{-1\pm\sqrt{5}}{2}\\x=\frac{-1+\sqrt{5}}{2}=BD\\\textcolor{myblue}{\hspace{9em}\tiny\blacksquare}}`
        });

        this.cachedRadiansAngle = 0;
    }

    appletLoaded() {
        super.appletLoaded();
        this.setZoom(-2.4, -1, 1.6, false);
    }

    initStates() {
        super.initStates();
        this.states = {
            0: async () => {
                this.setText('tekstInfo', '');
                this.resetHighlight(['AB', 'BC', 'CD']);
                await this.setZoomAnimated(-2.4, -1, 1.6, false, 'easeInOutQuint', 500);
            },
            1: async () => {
                this.setText('tekstInfo', this.appLines['gegeven_1']);
                this.setHighlightBlack(['AB', 'BC', 'CD']);
                this.resetHighlight(['AC', 'temp_{C}']);
            },
            2: () => {
                this.setText('tekstInfo', this.appLines['gegeven_2.1']);
                this.setHighlightBlack(['AC', 'temp_{C}']);
                this.resetHighlight(['AB', 'BC', 'CD', 'BD', 'temp_{D}']);
            },
            3: async () => {
                if (this.isPreviousState) {
                    await this.setZoomAnimated(-2.4, -1, 1.6, false, 'easeInOutQuint', 500);
                    let currentAngle = this.appletObject.getValue('schuif_{α}');
                    await this.animateFloat('schuif_{α}', currentAngle, this.cachedRadiansAngle, 'easeInOutQuint', 1500);
                    this.appletObject.setCaption('hoek_{BAC}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);
                    this.setObjectsVisible(['schuif_{α}'], true);
                }

                this.setText('tekstInfo', this.appLines['gegeven_2.2']);
                this.setHighlightBlack(['AB', 'BD', 'temp_{D}']);
                this.resetHighlight(['AC', 'temp_{C}']);
            },
            4: async () => {
                this.setText('tekstInfo', this.appLines['BewijsHoekenVraag']);
                this.resetHighlight(['AB', 'BD', 'temp_{D}', 'AC', 'BC']);
                this.setObjectsVisible(['schuif_{α}', 'hoek_{ACB}'], false);
                if (this.isNextState) {
                    this.setZoomAnimated(-1.5, -0.25, 1.4, false, 'easeInOutQuint', 500);
                    this.cachedRadiansAngle = this.appletObject.getValue('schuif_{α}');
                    await this.animateFloat('schuif_{α}', this.cachedRadiansAngle, this.degreesToRadians(25), 'easeInOutQuint', 1500);
                }
                this.appletObject.setCaption('hoek_{BAC}', String.raw`$\textsf{\textbf{\huge{\vspace{0.2em}{α}}}}$`);
            },
            5: () => {
                this.setText('tekstInfo', this.appLines['BewijsHoeken1.1']);
                this.setHighlightRed(['AC', 'BC']);
                this.resetHighlight(['AB']);
                this.setObjectsVisible(['hoek_{ACB}'], true);
                this.setObjectsVisible(['hoek_{ABC}'], false);
            },
            6: () => {
                this.setText('tekstInfo', this.appLines['BewijsHoeken1.2']);
                this.resetHighlight(['AC', 'BD']);
                this.setObjectsVisible(['hoek_{ABC}'], true);
                this.setHighlightPink(['AB', 'BC']);
                this.appletObject.setCaption('hoek_{DBC}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);                
            },
            7: () => {
                this.setText('tekstInfo', this.appLines['BewijsHoeken1.3']);
                this.appletObject.setCaption('hoek_{DBC}', String.raw`$\textsf{\textbf{\huge{2α}}}$`);
                this.resetHighlight(['AB', 'CD']);
                this.setHighlightGreen(['BC', 'BD']);
                this.setObjectsVisible(['hoek_{BDC}'], false);
            },
            8: () => {
                this.setText('tekstInfo', this.appLines['BewijsHoeken1.4']);
                this.appletObject.setCaption('hoek_{BDC}', String.raw`$\textsf{\textbf{\huge{2α}}}$`);
                this.setObjectsVisible(['hoek_{BDC}'], true);
                this.setObjectsVisible(['hoek_{BCD}'], false);
                this.resetHighlight(['BC']);
                this.setHighlightGreen(['BD', 'CD']);                
            },
            9: () => {
                this.setText('tekstInfo', this.appLines['BewijsHoeken1.5']);
                this.appletObject.setCaption('hoek_{BCD}', String.raw`$\textsf{\textbf{\vspace{1em}\\\huge{180°-4α}}}$`);
                this.appletObject.setCaption('hoek_{CD}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);
                this.setObjectsVisible(['hoek_{BCD}'], true);
                this.resetHighlight(['BD', 'temp_{C}']);
                this.setHighlightVibrantBlue(['BC', 'CD']);
            },
            10: async () => {
                if (this.isPreviousState) {
                    let currentRadians = this.appletObject.getValue('schuif_{α}');
                    this.setZoomAnimated(-1.5, -0.25, 1.4, false, 'easeInOutQuint', 500);
                    await this.animateFloat('schuif_{α}', currentRadians, this.degreesToRadians(25), 'easeInOutQuint', 1500);
                }

                this.setText('tekstInfo', this.appLines['BewijsHoeken1.6']);
                this.appletObject.setCaption('hoek_{CD}', String.raw`$\textsf{\textbf{\huge{3α}}}$`);
                this.setObjectsVisible(['hoek_{ABC}', 'hoek_{ACB}', 'hoek_{BCD}'], true);
                this.resetHighlight(['BC']);
                this.setHighlightBlue(['CD', 'temp_{C}']);
                this.appletObject.setCaption('hoek_{BAC}', String.raw`$\textsf{\textbf{\huge{α}}}$`);
                this.appletObject.setCaption('hoek_{DBC}', String.raw`$\textsf{\textbf{\huge{2α}}}$`);
                this.appletObject.setCaption('hoek_{BDC}', String.raw`$\textsf{\textbf{\huge{2α}}}$`);
 
            },
            11: async () => {
                this.setText('tekstInfo', this.appLines['hoek36']);
                this.appletObject.setCaption('hoek_{BAC}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);
                this.appletObject.setCaption('hoek_{DBC}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);
                this.appletObject.setCaption('hoek_{BDC}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);
                this.appletObject.setCaption('hoek_{CD}', String.raw`$\textsf{\textbf{\huge{%v}}}$`);
                this.setObjectsVisible(['hoek_{ABC}', 'hoek_{ACB}', 'hoek_{BCD}', 'hoek_{CDE}'], false);
                this.resetHighlight(['CD', 'temp_{C}']);
                if (this.isNextState) {
                    let currentRadians = this.appletObject.getValue('schuif_{α}');
                    this.setZoomAnimated(-2.0, -0.3, 1.3, false, 'easeInOutQuint', 500);
                    await this.animateFloat('schuif_{α}', currentRadians, this.degreesToRadians(36), 'easeInOutQuint', 1500);
                }
            },
            12: () => {
                this.setText('tekstInfo', this.appLines['hoekD']);
                this.setObjectsVisible(['hoek_{CDE}','hoek_{DBC}', 'BC'], true);   
            },
            13: () => {
                this.setText('tekstInfo', this.appLines['lengteBD']);
            },
            14: () => {
                this.setText('tekstInfo', this.appLines['gelijkvormigheid_1']);
                this.setObjectsVisible(['C_{2}', 'D_{2}', 'BC_{2}', 'CD_{2}', 'BD_{2}', 'hoek_{DBC2}', 'hoek_{ADB2}', 'hoek_{ACD}', 'driehoek_{BCD2}'], false);
                this.appletObject.setValue('rotatie_{BCD}', 0);
                this.setObjectsVisible(['hoek_{DBC}', 'BC'], true);
                this.resetHighlight(['AB', 'AC', 'BC', 'BD', 'CD'], true);
            },
            15: async () => {
                this.setText('tekstInfo', '');
                this.setObjectsVisible(['hoek_{DBC}', 'tekst_{X}'], false);
                this.setObjectsVisible(['C_{2}', 'D_{2}', 'BC_{2}', 'CD_{2}', 'BD_{2}', 'driehoek_{BCD2}'], true);
                this.appletObject.setLabelVisible('BD', true);
                this.resetHighlight(['BD']);
                this.appletObject.setFilling('driehoek_{BCD2}', 0);
                this.appletObject.setColor('BC', 192, 192, 192);
                await this.fadePolygon('driehoek_{BCD2}', 0.0, 0.5, 'easeInOutQuint', 500);
                await this.animateFloat('rotatie_{BCD}', 0, this.degreesToRadians(108), 'easeOutBounce', 2500);
                this.setObjectsVisible(['hoek_{DBC2}', 'hoek_{ADB2}', 'hoek_{ACD}'], true);
                this.setHighlightRed(['AB', 'AC', 'BD', 'CD'], true);
                this.appletObject.setTextValue('tekstInfo', this.appLines['gelijkvormigheid_2']);
            },
            16: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.1']);
                this.appletObject.setValue('rotatie_{BCD}', 0);
                this.appletObject.setLabelVisible('BD', false);
                this.setObjectsVisible(['hoek_{DBC}', 'tekst_{X}'], true);
                this.setObjectsVisible(['C_{2}', 'D_{2}', 'BC_{2}', 'CD_{2}', 'BD_{2}', 'hoek_{DBC2}', 'hoek_{ADB2}', 'hoek_{ACD}', 'driehoek_{BCD2}'], false);        
                this.resetHighlight(['AB', 'AC', 'BD', 'BC', 'CD']);
                this.setHighlightBlack(['BD']);
            },
            17: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.2']);
                this.resetHighlight(['CD']);
                this.setHighlightBlue(['AB', 'BD']);
                this.setHighlightGreen(['BC']);                
            },
            18: () => {
                this.resetHighlight(['AB', 'BC']);
                this.setHighlightBlue(['CD']);
                this.setHighlightGreen(['BD']);
                this.setText('tekstInfo', this.appLines['Bewijs_1.3']);
                this.appletObject.setLabelVisible('AB', false);
                this.appletObject.setLabelVisible('BC', false);
                this.appletObject.setLabelVisible('CD', false);
                this.appletObject.setColor('tekst_{X}', 0, 0,0 );   
            },
            19: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.4']);
                this.appletObject.setLabelVisible('AB', true);
                this.appletObject.setLabelVisible('BC', true);
                this.appletObject.setLabelVisible('CD', true);
                this.appletObject.setColor('tekst_{X}', 68, 114, 196);
                this.resetHighlight(['CD', 'BD']);
                this.setHighlightBlue(['AB', 'BD']);
                this.setHighlightGreen(['BC']);
            },
            20: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.5']);
                this.appletObject.setColor('tekst_{X}', 0, 153, 0);
                this.resetHighlight(['AB', 'BC']);
                this.setHighlightBlue(['CD']);
                this.setHighlightGreen(['BD']);
            },
            21: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.6']);
                this.appletObject.setColor('tekst_{X}', 0, 0, 0);
                this.resetHighlight(['CD', 'BD']);              
            },
            22: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.7']);
            },
            23: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.8']);
            },
            24: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.9']);
                this.appletObject.setLabelVisible('AB', true);
                this.appletObject.setLabelVisible('BC', true);
                this.appletObject.setLabelVisible('CD', true);
                this.appletObject.setLabelVisible('BD', false);
                this.setObjectsVisible(['tekst_{X}'], true);
            },
            25: () => {
                this.setText('tekstInfo', this.appLines['Bewijs_1.10']);
                this.appletObject.setLabelVisible('AB', false);
                this.appletObject.setLabelVisible('BC', false);
                this.appletObject.setLabelVisible('CD', false);
                this.appletObject.setLabelVisible('BD', true);
                this.setObjectsVisible(['tekst_{X}'], false);
            }
        }
    }
}
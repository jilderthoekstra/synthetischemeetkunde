class AppletSquare extends AppletBase {
    constructor(container) {
        super('./applets/applet-square.ggb', 'appletSquare', container, 31);

        this.appLines = Object.freeze({
            "stap1": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 1:} Trek een willekeurige lijn en plaats hier punt M op. Teken vervolgens een\\cirkel vanuit punt M.}}\\`,
            "stap2": String.raw`\text{\textcolor{myblue}{Stap 2:}\textcolor{mydarkgray}{ Teken punt S op het rechter snijpunt(cirkel, lijn).}}\\`,
            "stap3": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 3:} Teken een cirkel vanuit S met afstand(M,S) als straal en \\plaats punten P,Q op de snijpunten.}}\\`,
            "stap4": String.raw`\text{\textcolor{myblue}{Stap 4:}\textcolor{mydarkgray}{ Trek lijnstuk PQ en teken punt R op de het snijpunt van lijn MS en PQ.}}\\`,
            "stap5": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 5:} Teken een cirkel vanuit R met afstand(M,R) en plaats punt X,Y \\op de snijpunten(cirkel-R, PQ)}}\\`,
            "stap6": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 6:} Teken een lijn door de punten M en X en noem de\\snijpunten met de \textcolor{mygreen}{cirkel} punt A en C. We doen dit nog een keer bij de punten M, Y.\\ We noemen de punten B en D.}}\\`,
            "stap7": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 7:} Trek de lijnen AB, BC, CD, AD}}\\`,
            "bewijsHoek_1": String.raw`\textcolor{mydarkgray}{\text{MS is een rechte lijn door R}\\\left.\begin{aligned}MR &= SR\text{ (midden)}\\PR &= PR\\MP &= SP\text{ (straal)}\\\end{aligned} \right\} \Rightarrow \Delta MRP \cong \Delta SRP (ZZZ)\\\text{Dus }\angle MRP = 90\degree [1]}`,
            "bewijsHoek_2": String.raw`\textcolor{mydarkgray}{\text{MS is een rechte lijn door R}\\\left.\begin{aligned}\textcolor{myblue}{MR} &= \textcolor{mygreen}{SR}\text{ (midden)}\\PR &= PR\\MP &= SP\text{ (straal)}\\\end{aligned} \right\} \Rightarrow \Delta MRP \cong \Delta SRP (ZZZ)\\\text{Dus }\angle MRP = 90\degree [1]}`,
            "bewijsHoek_3": String.raw`\textcolor{mydarkgray}{\text{MS is een rechte lijn door R}\\\left.\begin{aligned}MR &= SR\text{ (midden)}\\PR &= PR\\\textcolor{myblue}{MP} &= \textcolor{mygreen}{SP}\text{ (straal)}\\\end{aligned} \right\} \Rightarrow \Delta MRP \cong \Delta SRP (ZZZ)\\\text{Dus }\angle MRP = 90\degree [1]}`,
            "bewijsHoek_4": String.raw`\textcolor{mydarkgray}{\text{MS is een rechte lijn door R}\\\left.\begin{aligned}MR &= SR\text{ (midden)}\\PR &= PR\\MP &= SP\text{ (straal)}\\\end{aligned} \right\} \Rightarrow \textcolor{myblue}{\Delta MRP} \cong \textcolor{mygreen}{\Delta SRP} (ZZZ)\\\text{Dus }\angle MRP = 90\degree [1]}`,
            "bewijsHoek_5": String.raw`\textcolor{mydarkgray}{\text{MS is een rechte lijn door R}\\\left.\begin{aligned}MR &= SR\text{ (midden)}\\PR &= PR\\MP &= SP\text{ (straal)}\\\end{aligned} \right\} \Rightarrow \Delta MRP \cong \Delta SRP (ZZZ)\\\text{Dus }\angle \textcolor{mygreen}{MRP = 90\degree} [1]}`,
            "bewijsKleineHoek_1": String.raw`\textcolor{mydarkgray}{\text{MR = RX en hoek 90\degree \Rightarrow dus verhouding van }\textcolor{myblue}{\Delta MRX}\text{ 1:1:\sqrt{2}}}\\`,
            "bewijsKleineHoek_2": String.raw`\textcolor{mydarkgray}{\text{Dus hoeken van }\textcolor{myblue}{\Delta MRX}\text{ 45\degree : 45\degree : 90\degree}}\\`,
            "bewijsKleineHoek_3": String.raw`\textcolor{mydarkgray}{\\\\\text{Analoog kunnen we hetzelfde doen voor }\\\textcolor{mygreen}{\Delta MRY} \text{ dus is } \textbf{\angle{XMY}} \text{ 2 \cdot 45\degree. [2]}}\\\textit{We zien dit ook met de stelling van Thales.}`,
            "bewijs_1.1": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}\angle{AMD} &= 90\degree \text{ (vanwege [2])}\\\angle{AMD} &= \angle{BMC} \text{ (overstaande hoeken)}\\\angle{AMB} &= \angle{CMD} \text{ (overstaande hoeken)}\\\end{aligned} \right\} \Rightarrow \angle{AMD} = \angle{BMC} = \angle{AMB} = \angle{CMD} \text{ [3]}}`,
            "bewijs_1.2": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}\textcolor{myblue}{\angle{AMD}} &= \textcolor{myred}{90\degree} \text{ (vanwege [2])}\\\angle{AMD} &= \angle{BMC} \text{ (overstaande hoeken)}\\\angle{AMB} &= \angle{CMD} \text{ (overstaande hoeken)}\\\end{aligned} \right\} \Rightarrow \angle{AMD} = \angle{BMC} = \angle{AMB} = \angle{CMD} \text{ [3]}}`,
            "bewijs_1.3": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}\angle{AMD} &= 90\degree \text{ (vanwege [2])}\\\textcolor{myblue}{\angle{AMD}} &= \textcolor{mygreen}{\angle{BMC}} \text{ (overstaande hoeken)}\\\angle{AMB} &= \angle{CMD} \text{ (overstaande hoeken)}\\\end{aligned} \right\} \Rightarrow \angle{AMD} = \angle{BMC} = \angle{AMB} = \angle{CMD} \text{ [3]}}`,
            "bewijs_1.4": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}\angle{AMD} &= 90\degree \text{ (vanwege [2])}\\\angle{AMD} &= \angle{BMC} \text{ (overstaande hoeken)}\\\textcolor{myblue}{\angle{AMB}} &= \textcolor{mygreen}{\angle{CMD}} \text{ (overstaande hoeken)}\\\end{aligned} \right\} \Rightarrow \angle{AMD} = \angle{BMC} = \angle{AMB} = \angle{CMD} \text{ [3]}}`,
            "bewijs_2.1": String.raw`\\\\\textcolor{mydarkgray}{\text{\textcolor{myblue}{AM} = \textcolor{myred}{BM} = \textcolor{mygreen}{CM} = \textcolor{mypink}{DM}\text{ (straal) [4]}}}`,
            "bewijs_2.2": String.raw`\\\\\textcolor{mydarkgray}{\text{AM = BM = CM = DM (straal) [4]}}`,    
            "bewijs_3.1": String.raw`\\\\\textcolor{mydarkgray}{\text{\textcolor{myblue}{AB} = \textcolor{myred}{BC} = \textcolor{mygreen}{CD} = \textcolor{mypink}{AD}\text{ (vanwege [3] \& [4])}}}`,
            "bewijs_4.1": String.raw`\textcolor{mydarkgray}{\text{\angle{ABC} = \angle{BCD} = \angle{CDA} = \angle{DAB} = 90\degree (Stelling van Thales)}}`,
            "bewijs_4.2": String.raw`\textcolor{mydarkgray}{\text{\textbf{\angle{ABC}} = \angle{BCD} = \angle{CDA} = \angle{DAB} = 90\degree (Stelling van Thales)}}`,
            "bewijs_4.3": String.raw`\textcolor{mydarkgray}{\text{\angle{ABC} = \textbf{\angle{BCD}} = \angle{CDA} = \angle{DAB} = 90\degree (Stelling van Thales)}}`,
            "bewijs_4.4": String.raw`\textcolor{mydarkgray}{\text{\angle{ABC} = \angle{BCD} = \textbf{\angle{CDA}} = \angle{DAB} = 90\degree (Stelling van Thales)}}`,
            "bewijs_4.5": String.raw`\textcolor{mydarkgray}{\text{\angle{ABC} = \angle{BCD} = \angle{CDA} = \textbf{\angle{DAB}} = 90\degree (Stelling van Thales)}}`,
        });
    }

    initStates() {
        super.initStates();
        this.states = {
            0: async () => {
                this.setObjectsVisible(['vierhoek'], true);
                this.setObjectsVisible(['tekstInfo', 'basisLijn', 'M', 'cirkel_{O}'], false);
                this.setZoomAnimated(-4, -2.5, 2.5, false, 'easeInOutQuint', 500);
                await this.fadePolygon('vierhoek', 0, 0.5, 'easeInOutQuint', 500);
            },
            1: async () => {
                this.appletObject.setVisible('S', false);
                if (this.isNextState) {
                    this.setZoomAnimated(-6.5, -2.5, 4, false, 'easeInOutQuint', 500);
                    await this.fadePolygon('vierhoek', 0.5, 0, 'easeInOutQuint', 500);
                }
                this.setText('tekstInfo', this.appLines['stap1']);
                this.setObjectsVisible(['vierhoek'], false);
                this.setObjectsVisible(['tekstInfo', 'basisLijn', 'M', 'cirkel_{O}'], true);
            },
            2: () => {
                this.setText('tekstInfo', this.appLines['stap2']);
                this.setObjectsVisible(['S'], true);
                this.setObjectsVisible(['cirkel_{S}','P','Q'], false);
            },
            3: () => {
                this.setText('tekstInfo', this.appLines['stap3']);
                this.setObjectsVisible(['cirkel_{S}','P','Q'], true);
                this.setObjectsVisible(['R','PQ'], false);
                this.setHighlightBlack(['cirkel_{S}']);                
            },
            4: async () => {
                this.setText('tekstInfo', this.appLines['stap4']);
                this.resetHighlight(['cirkel_{S}']);
                this.setObjectsVisible(['PQ','R'], true);
                this.setObjectsVisible(['cirkel_{R}','X', 'Y', 'MP','PS', 'MR', 'RS'], false);
                this.setHighlightBlack(['PQ']);
                if (this.isPreviousState) {
                    await this.setZoomAnimated(-6.5, -2.5, 4, false, 'easeInOutQuint', 500);
                }
            },
            5: async () => {
                this.setText('tekstInfo', this.appLines['bewijsHoek_1']);
                this.resetHighlight(['PQ']);
                this.setObjectsVisible(['MP','PS', 'MR', 'RS'], true);
                this.resetHighlight(['MR', 'RS']); 
                await this.setZoomAnimated(-4.2, -0.5, 3.4, false, 'easeInOutQuint', 500);
            },
            6: async () => {
                this.setText('tekstInfo', this.appLines['bewijsHoek_2']);
                this.setHighlightBlue(['MR']);
                this.setHighlightGreen(['RS']);
                this.resetHighlight(['MP', 'PS']);
            },
            7: () => {
                this.setText('tekstInfo', this.appLines['bewijsHoek_3']);
                this.setObjectsVisible(['driehoek_{MRP}', 'driehoek_{SRP}'], false);
                this.resetHighlight(['MR', 'RS']); 
                this.setHighlightBlue(['MP']);
                this.setHighlightGreen(['PS']);
            },
            8: () => {
                this.setText('tekstInfo', this.appLines['bewijsHoek_4']);
                this.setObjectsVisible(['driehoek_{MRP}', 'driehoek_{SRP}'], true);
                this.setObjectsVisible(['hoek_{R}', 'PR'], false);
                this.resetHighlight(['MP', 'PS', 'MR', 'PR']); 
            },
            9: async () => {
                this.setText('tekstInfo', this.appLines['bewijsHoek_5']);
                this.setObjectsVisible(['driehoek_{MRP}', 'driehoek_{SRP}'], false);
                this.setObjectsVisible(['hoek_{R}', 'MP', 'PS', 'MR', 'PR'], true);
                this.setHighlightGreen(['MR', 'PR']);
                await this.setZoomAnimated(-4.2, -0.5, 3.4, false, 'easeInOutQuint', 500);
            },
            10: async () => {
                this.setText('tekstInfo', "");
                this.resetHighlight(['MR', 'PR']);
                this.setObjectsVisible(['MP', 'PS', 'PR'], false);
                this.setObjectsVisible(['cirkel_{R}', 'X', 'Y'], false);
                await this.setZoomAnimated(-6.5, -2.5, 4, false, 'easeInOutQuint', 500);
            },
            11: async () => {
                this.setText('tekstInfo', this.appLines['stap5']);
                this.setObjectsVisible(['cirkel_{R}', 'X', 'Y', 'basisLijn', 'cirkel_{O}', 'cirkel_{S}', 'PQ', 'P', 'Q'], true)
                this.setObjectsVisible(['A', 'B', 'C', 'D', 'AC', 'BD', 'MX','RX'], false);
                this.setHighlightBlack(['cirkel_{R}']);
                await this.setZoomAnimated(-6.5, -2.5, 4, false, 'easeInOutQuint', 500);               
            },
            12: async () => {
                this.setText('tekstInfo', "");
                this.setObjectsVisible(['basisLijn', 'cirkel_{O}', 'cirkel_{S}', 'PQ', 'P', 'Q'], false);
                this.setObjectsVisible(['RX'], true);
                this.resetHighlight(['cirkel_{R}']);
                this.setZoomAnimated(-3.0, -1.2, 1.8, false, 'easeInOutQuint', 500);
                if (this.isPreviousState) {
                    await this.fadePolygon('driehoek_{klein}', 0.5, 0.0, 'easeInOutQuint', 500);
                    this.setObjectsVisible(['driehoek_{klein}'], false);
                }
                await this.delay(500);
                this.setObjectsVisible(['MX'], true);              
            },
            13: async () => {
                this.setText('tekstInfo', this.appLines['bewijsKleineHoek_1']);
                if (this.isNextState) {
                    this.appletObject.setFilling('driehoek_{klein}', 0.0);
                    this.appletObject.setVisible('driehoek_{klein}', true);
                    await this.fadePolygon('driehoek_{klein}', 0.0, 0.5, 'easeInOutQuint', 500); 
                }
                this.setObjectsVisible(['α'], false);
            },
            14: async () => {
                this.setText('tekstInfo', this.appLines['bewijsKleineHoek_1'] + this.appLines['bewijsKleineHoek_2']);
                if (this.isPreviousState) {
                    await this.fadePolygon('driehoek_{MRY}', 5.0, 0.0, 'easeInOutQuint', 500);
                    this.setObjectsVisible(['MY', 'RY','driehoek_{MRY}','hoek_{YMR}'], false);
                }
                this.resetHighlight(['MX', 'MY']);
                //zoomLevel(-3.0, -1.2, 1.8, false, true, 'easeInOutQuint', 500);
                //await fadePolygon('driehoek_{klein}', 0.0, 0.5, 'easeInOutQuint', 500);
                this.setObjectsVisible(['α'], true);
            },
            15: async () => {
                this.setText('tekstInfo', this.appLines['bewijsKleineHoek_1'] + this.appLines['bewijsKleineHoek_2'] + this.appLines['bewijsKleineHoek_3']);
                if (this.isPreviousState) {
                    this.setObjectsVisible(['basisLijn', 'cirkel_{O}', 'PQ', 'P', 'Q'], false);
                    this.setZoomAnimated(-3.0, -1.2, 1.8, false, 'easeInOutQuint', 500);
                    this.setObjectsVisible(['driehoek_{klein}'], true);
                    this.fadePolygon('driehoek_{klein}', 0.0, 0.5, 'easeInOutQuint', 500);
                }
                this.setObjectsVisible(['MY', 'RY', 'hoek_{YMR}', 'driehoek_{MRY}'], true);
                await this.fadePolygon('driehoek_{MRY}', 0.0, 0.5, 'easeInOutQuint', 500);
                this.setHighlightBlack(['MX', 'MY']);
            },
            16: async () => {
                this.setText('tekstInfo', "");
                this.resetHighlight(['AC', 'BD', 'MX', 'MY', 'cirkel_{O}']);
                this.setObjectsVisible(['A','B','C','D', 'AC', 'BD'], false);
                this.setZoomAnimated(-8.5, -2.5, 4, false, 'easeInOutQuint', 500);
                if (this.isNextState) {
                    this.fadePolygon('driehoek_{MRY}', 0.5, 0.0, 'easeInOutQuint', 500);
                    await this.fadePolygon('driehoek_{klein}', 0.5, 0.0, 'easeInOutQuint', 500);
                }
                this.setObjectsVisible(['basisLijn', 'cirkel_{O}', 'PQ', 'P', 'Q', 'cirkel_{R}', 'MX', 'MY','driehoek_{klein}'], true);
            },
            17: () => {
                this.setText('tekstInfo', this.appLines["stap6"]);
                this.setObjectsVisible(['A','B','C','D', 'AC', 'BD'], true);
                this.setObjectsVisible(['P','Q','PQ', 'cirkel_{R}', 'RX', 'RY', 'MR', 'RS', 'hoek_{R}', 'R', 'S', 'X', 'Y'], true);
                this.setHighlightBlack(['AC', 'BD']);
                this.setHighlightGreen(['cirkel_{O}']);
                this.setObjectsVisible(['AB','BC','CD', 'AD', 'MX', 'MY'], false);                
            },
            18: () => {
                this.setText('tekstInfo', this.appLines["stap7"]);
                this.setObjectsVisible(['P','Q','PQ', 'cirkel_{R}', 'RX', 'RY', 'MR', 'RS', 'hoek_{R}', 'R', 'S', 'X', 'Y'], false);
                this.setObjectsVisible(['AB','BC','CD', 'AD'], true);
                this.setHighlightBlack(['AB', 'BC', 'CD', 'AD']);
                this.resetHighlight(['cirkel_{O}', 'AC', 'BD']);
                this.setObjectsVisible(['AM','BM','CM', 'DM'], false);
                this.setObjectsVisible(['AC','BD'], true); 
            },
            19: () => {
                this.setObjectsVisible(['AM','BM','CM', 'DM'], true);
                this.setObjectsVisible(['AC','BD'], false);
                this.setText('tekstInfo', this.appLines["bewijs_1.1"]);
                this.resetHighlight(['AM', 'DM', 'AB', 'BC', 'CD','AD']);
            },
            20: () => {
                this.setText('tekstInfo', this.appLines["bewijs_1.2"]);
                this.setHighlightBlue(['AM', 'DM']);
                this.resetHighlight(['BM', 'CM'])
            },
            21: () => {
                this.setText('tekstInfo', this.appLines["bewijs_1.3"]);
                this.setHighlightBlue(['AM', 'DM']);
                this.setHighlightGreen(['BM']);
                this.setHighlightGreen(['CM']);
            },
            22: () => {
                this.setText('tekstInfo', this.appLines["bewijs_1.4"]);
                this.setHighlightBlue(['AM', 'BM']);
                this.setHighlightGreen(['DM', 'CM']);
            },
            23: () => {
                this.setText('tekstInfo', this.appLines["bewijs_1.1"]);
                this.setHighlightBlack(['AM', 'BM', 'CM', 'DM']);
                this.resetHighlight('cirkel_{O}');
            },
            24: () => {
                this.setText('tekstInfo', this.appLines["bewijs_1.1"] + this.appLines["bewijs_2.1"]);
                this.resetHighlight(['AB', 'BC', 'CD', 'AD']);
                this.setHighlightBlue(['AM']);
                this.setHighlightRed(['BM']);
                this.setHighlightGreen(['CM']);
                this.setHighlightPink(['DM']);
                this.setHighlightBlack(['cirkel_{O}']);
            },
            25: () => {
                this.setText('tekstInfo', this.appLines["bewijs_1.1"] + this.appLines["bewijs_2.2"] + this.appLines["bewijs_3.1"]);
                this.resetHighlight(['AM', 'BM', 'CM', 'DM', 'cirkel_{O}']);
                this.setHighlightBlue(['AB']);
                this.setHighlightRed(['BC']);
                this.setHighlightGreen(['CD']);
                this.setHighlightPink(['AD']);
                this.setObjectsVisible(['basisLijn', 'AM', 'BM', 'CM', 'DM', 'AC', 'BD', 'α', 'hoek_{YMR}'], true);
                this.setObjectsVisible(['hoek_{DMA}'], false);
            },
            26: () => {
                this.setText('tekstInfo', this.appLines["bewijs_4.1"]);
                this.setObjectsVisible(['basisLijn', 'AM', 'BM', 'CM', 'DM', 'α', 'hoek_{YMR}'], false);
                this.setObjectsVisible(['hoek_{DMA}', 'AC', 'BD'], true);
                this.resetHighlight(['AB', 'BC', 'CD', 'AD', 'AC']);
            },
            27: () => {
                this.setText('tekstInfo', this.appLines["bewijs_4.2"]);
                this.setHighlightBlack(['AB', 'BC']);
                this.setHighlightBlue(['AC']);
                this.resetHighlight(['CD', 'BD']);
            },
            28: () => {
                this.setText('tekstInfo', this.appLines["bewijs_4.3"]);
                this.setHighlightBlack(['BC', 'CD']);
                this.setHighlightBlue(['BD']);
                this.resetHighlight(['AB', 'AC', 'AD']);
            },
            29: () => {
                this.setText('tekstInfo', this.appLines["bewijs_4.4"]);
                this.resetHighlight(['AB', 'BC', 'BD']);
                this.setHighlightBlack(['CD', 'AD']);
                this.setHighlightBlue(['AC']);
            },
            30: async () => {
                this.setText('tekstInfo', this.appLines["bewijs_4.5"]);
                this.setObjectsVisible(['AC', 'BD', 'hoek_{DMA}', 'M'], true);
                this.resetHighlight(['CD', 'AC']);
                this.setHighlightBlack(['AD', 'AB']);
                this.setHighlightBlue(['BD']);
                if (this.isPreviousState) {
                    this.setZoomAnimated(-8.5, -2.5, 4, false, 'easeInOutQuint', 500);                
                    await this.fadePolygon('vierhoek', 0.5, 0.0, 'easeInOutQuint', 500);
                    this.setObjectsVisible(['vierhoek'], false);
                }
            },
            31: async () => {
                this.setText('tekstInfo', "");
                this.resetHighlight(['AB', 'BD', 'AD']);
                this.setObjectsVisible(['AC', 'BD', 'hoek_{DMA}', 'M'], false);
                this.setObjectsVisible(['vierhoek'], true);
                await this.fadePolygon('vierhoek', 0.0, 0.5, 'easeInOutQuint', 500);
                await this.setZoomAnimated(0, -2.5, 2.5, true, 'easeOutElastic', 1500);
            }
        }
    }
}
class AppletPentagon extends AppletBase {
    constructor(container) {
        super('./applets/applet-pentagon.ggb', 'appletPentagon', container, 34);

        this.appLines = Object.freeze({
            "vraag_1": String.raw`\textcolor{mydarkgray}{\text{Maak een lijnstuk met lengte \frac{-1+\sqrt{5}}{2}. Bekend is éénheidslijnstuk met lengte 1.}}\\`,
            "antwoord_1": String.raw`\textcolor{mydarkgray}{\text{Begin eerst met een lijnstuk met lengte \sqrt{5} te tekenen.\\Pythagoras kan ons hierbij helpen.}}\\`,
            "stap_1": String.raw`\textcolor{mydarkgray}\text{\textcolor{myblue}{Stap 1: }Teken een basis lijn en plaats hier de punten A,P,Q en R op.\\Gebruik het éénheidslijnstuk als afstand tussen de punten. }}\\`,
            "stap_2": String.raw`\textcolor{mydarkgray}\text{\textcolor{myblue}{Stap 2: }Teken een lijn loodrecht door Q.\\Doe dit door eerst een cirkel \textcolor{myblue}{P} en \textcolor{mygreen}{R} te tekenen.\\Trek vervolgens een lijn door de twee snijpunten.}}\\`,
            "stap_3": String.raw`\textcolor{mydarkgray}\text{\textcolor{myblue}{Stap 3: }Teken \textcolor{myblue}{cirkel Q} met straal QR. Noem het onderste \\snijpunt S en verbind de punten met een lijnstuk.}}\\`,
            "stap_4": String.raw`\textcolor{mydarkgray}\text{\textcolor{myblue}{Stap 4: }Trek lijnstuk \textbf{AS}.}}\\`,
            "stap_5": String.raw`\textcolor{mydarkgray}\text{\textcolor{myblue}{Stap 5: }Teken \textcolor{myblue}{cirkel A} met straal AP. Dit geeft een nieuw\\snijpunt B op lijnstuk AS.}\\\textcolor{myred}{AB} = 1\\\textcolor{mygreen}{BS} = -1+\sqrt{5}}\\`,
            "stap_6": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 6: }Teken \textcolor{myblue}{cirkel B} met straal BS en \textcolor{mygreen}{cirkel S} ook met straal BS.\\Trek een lijn tussen de snijpunten van beide cirkels. Dit geeft\\een nieuw snijpunt D op lijnstuk BS.\\\textcolor{myred}{BD = \frac{-1+\sqrt{5}}{2}}}}\\`,
            "stap_7": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 7: }Teken \textcolor{myblue}{cirkel B} en \textcolor{mygreen}{cirkel D} met straal 1.\\Teken lijnstuk \textbf{BC} en \textbf{CD} om een gelijkbenige driehoek te maken.\\AB = BD = CD (straal)}}\\`,
            "stap_8": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 8: }Teken de hulplijnen vanuit A door C en\\vanuit A door B en D.}}\\`,
            "stap_9": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 9: }Teken \textcolor{mygreen}{cirkel D} met straal 1. Dit geeft een nieuw\\snijpunt E op de hulplijn. Teken lijnstuk \textbf{DE}.\\CD = DE (straal)}}\\`,
            "stap_10": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 10: }Teken \textcolor{mygreen}{cirkel C} met straal 1. Dit geeft een nieuw\\snijpunt G op de hulplijn. Teken lijnstuk \textbf{CG}.\\CD = CG (straal)}}\\`,
            "stap_11": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Stap 11: }Teken \textcolor{myblue}{cirkel G} en \textcolor{mygreen}{cirkel E} met straal 1.\\Dit geeft rechts het snijpunt F.\\Teken lijnstuk \textbf{FG} en \textbf{EF}.\\CD = DE = CG = EF = FG (straal)}}\\`,
            "bewijs_1": String.raw`\textcolor{mydarkgray}{\text{Vastgesteld is:\\CD = DE = CG = EF = FG (straal)\\\textcolor{myblue}{\angle{C}} = \textcolor{myblue}{\angle{D}} = 108° (Viète)}}\\`,
            "bewijs_2": String.raw`\textcolor{mydarkgray}{\text{Teken \textbf{CE}.}}\\`,
            "bewijs_3": String.raw`\textcolor{mydarkgray}{\text{\angle{DCE} = \angle{DEC} = \textcolor{myred}{36°} (\textcolor{myblue}{gelijkbenige \Delta})}}\\`,
            "bewijs_4": String.raw`\textcolor{mydarkgray}{\text{Teken \textbf{DG}.}}\\`,
            "bewijs_5": String.raw`\textcolor{mydarkgray}{\text{\angle{CDG} = \angle{CGD} = \textcolor{myred}{36°} (\textcolor{myblue}{gelijkbenige \Delta})}}\\`,
            "bewijs_6": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}CD &= DE \text{ (straal)}\\\angle{C} &= \angle{D}  \text{ (108° Viète)}\\CG &= DC \text{ (straal)}\end{aligned}\right\}\Rightarrow \textcolor{myblue}{\Delta{GCG}} \cong \textcolor{myred}{\Delta{EDG}} \text{ (ZHZ)}\\\text{Dus: DG = CE}}\\`,
            "bewijs_7": String.raw`\textcolor{mydarkgray}{\text{Teken punt U op snijpunt CE = DG}}\\`,
            "bewijs_8": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{\angle{CUD}} = 108° (\textcolor{mygreen}{gelijkbenige \Delta})\\\textcolor{myblue}{\angle{CUD}} = \textcolor{myred}{\angle{EUG}} (overstaande hoeken)}}\\`,
            "bewijs_9": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{\angle{CUG}} = 72° (hoekensom \Delta)\\\textcolor{mygreen}{\angle{DUE}} = 72° (hoekensom \Delta)}}\\`,
            "bewijs_10": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{CG} = \textcolor{mygreen}{UG} (gelijkbenige \Delta)\\\textcolor{mypink}{DE} = \textcolor{myred}{EU} (gelijkbenige \Delta)\\\\Hieruit volgt:}\\\left.\begin{aligned}\textcolor{myblue}{CG} &= \textcolor{myred}{UE}\\\angle{CGU} &= \angle{UEG}\\\textcolor{mygreen}{UG} &= \textcolor{mypink}{DE}\end{aligned}\right\}\Rightarrow \Delta{CGU} \cong \Delta{UED}}\\`,
            "bewijs_11": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{CG} = \textcolor{mygreen}{UG} (gelijkbenige \Delta)\\\textcolor{mypink}{DE} = \textcolor{myred}{EU} (gelijkbenige \Delta)\\\\Hieruit volgt:}\\\left.\begin{aligned}\textcolor{myblue}{CG} &= \textcolor{myred}{UE}\\\angle{CGU} &= \angle{UEG}\\\textcolor{mygreen}{UG} &= \textcolor{mypink}{DE}\end{aligned}\right\}\Rightarrow \Delta{CGU} \cong \Delta{UED}\\\\Dus:\textbf{CU} = \textbf{DU}}\\`,
            "bonus_1": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Bonus:} Wat is de lengte van lijnstuk \textbf{CU} en \textbf{DU}?}}`,
            "bonus_2": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Bonus:} Wat is de lengte van lijnstuk CU en DU?}}`,
            "bonus_3": String.raw`\textcolor{mydarkgray}{\text{\textcolor{myblue}{Bonus:} Wat is de lengte van lijnstuk CU en DU?\\CU = DU = BD = \frac{-1 + \sqrt{5}}{2}}}`,
            "bewijs_12": String.raw`\textcolor{mydarkgray}{\text{Teken lijn \textbf{EG}.}}`,
            "bewijs_13": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}EU &= EF \\EG &= EG\\GU &= GF\end{aligned}\right\}\Rightarrow \textcolor{mygreen}{\Delta{EUG}} \cong \textcolor{myblue}{\Delta{EFG}} \text{ (ZZZ)}}`,
            "bewijs_14": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}EU &= EF \\EG &= EG\\GU &= GF\end{aligned}\right\}\Rightarrow \Delta{EUG} \cong \Delta{EFG} \text{ (ZZZ)}\\\text{Hieruit volgt: \textbf{\angle{EFG}} = 108°}}`,
            "bewijs_15": String.raw`\textcolor{mydarkgray}{\left.\begin{aligned}EU &= EF \\EG &= EG\\GU &= GF\end{aligned}\right\}\Rightarrow \Delta{EUG} \cong \Delta{EFG} \text{ (ZZZ)}\\\text{Hieruit volgt: \angle{EFG} = 108°}\\\\\angle{UGE} = \angle{EGF} = \angle{GEU} = \angle{FEG} = 36°\\\text{(vanwege gelijkbenige \Delta)}}`,
            "bewijs_16": String.raw`\textcolor{mydarkgray}{\textcolor{myblue}{\angle{CGF}} = \textcolor{mygreen}{\angle{DEF}} = 3 \cdot 36° = 108°}`,
            "Q.E.D.": String.raw`\textcolor{mydarkgray}{\textbf{Q.E.D.}}`,
        });
    }

    initStates() {
        super.initStates();
        this.states = {
            0: async () => {
                this.setZoom(1.2, -4, 4, true);                
                this.setText('tekstInfo', '');
                this.appletObject.setValue('rotatie', 0.46373);
                this.setObjectsVisible(['vijfhoek'], true);
                this.setZoomAnimated(1.2, -0.8, 1.4, true, 'easeInOutQuint', 500);
                await this.fadePolygon('vijfhoek', 0.0, 0.5, 'easeInOutQuint', 500);
            },
            1: async () => {
                if (this.isNextState) {
                    this.fadePolygon('vijfhoek', 0.5, 0.0, 'easeInOutQuint', 500);
                    await this.setZoomAnimated(1.2, -4, 4, true, 'easeInOutQuint', 500);
                    this.setZoom(-7.5, -2.5, 4, false);
                    this.appletObject.setValue('rotatie', 0);
                    this.setObjectsVisible(['vijfhoek'], false);
                }
                this.setText('tekstInfo', this.appLines['vraag_1']);
            },
            2: () => {
                this.setText('tekstInfo', this.appLines['antwoord_1']);
                this.setObjectsVisible(['A', 'P', 'Q', 'R', 'hulpstuk_{basis}', 'AP', 'PQ', 'QR'], false);
            },
            3: () => {
                this.setText('tekstInfo', this.appLines['stap_1']);
                this.setObjectsVisible(['A', 'P', 'Q', 'R', 'hulpstuk_{basis}', 'AP', 'PQ', 'QR'], true);
                this.setObjectsVisible(['cirkel_{P2}', 'cirkel_{R}', 'hulpstuk_{Q}', 'hoek_{PQS}'], false);   
            },
            4: () => {
                this.setText('tekstInfo', this.appLines['stap_2']);
                this.setObjectsVisible(['cirkel_{P2}', 'cirkel_{R}', 'hulpstuk_{Q}', 'hoek_{PQS}'], true);
                this.setObjectsVisible(['cirkel_{Q}', 'S', 'QS'], false);
                this.setHighlightBlack(['hulpstuk_{Q}']);
                this.setHighlightBlue(['cirkel_{P2}']);
                this.setHighlightGreen(['cirkel_{R}']);  
            },
            5: async () => {
                if (this.isPreviousState) {
                    this.setZoomAnimated(-7.5, -2.5, 4, false, 'easeInOutQuint', 500);   
                    await this.animateFloat('rotatie', 0.46373, 0, 'easeInOutQuint', 1500);
                }

                this.setText('tekstInfo', this.appLines['stap_3']);
                this.resetHighlight(['hulpstuk_{Q}', 'cirkel_{P2}', 'cirkel_{R}']);
                this.setObjectsVisible(['cirkel_{Q}', 'S', 'QS'], true);
                this.setObjectsVisible(['hulpstuk_{basis}', 'hulpstuk_{Q}', 'cirkel_{P2}', 'cirkel_{R}', 'QR', 'R'], true);
                this.setObjectsVisible(['AS'], false);        
                this.setHighlightBlue(['cirkel_{Q}']);
                this.setHighlightBlack(['QS']);
            },
            6: async () => {
                this.setText('tekstInfo', this.appLines['stap_4']);
                this.setObjectsVisible(['hulpstuk_{basis}', 'hulpstuk_{Q}', 'cirkel_{Q}', 'cirkel_{P2}', 'cirkel_{R}', 'QR', 'R', 'cirkel_{A}', 'AB', 'BS', 'B'], false);
                this.resetHighlight(['cirkel_{Q}', 'QS']);
                this.setObjectsVisible(['AS'], true);
                this.setHighlightBlack(['AS']);
                if (this.isNextState) {
                    await this.animateFloat('rotatie', 0, 0.46373, 'easeInOutQuint', 1500);
                    this.setZoomAnimated(-3.4, -1.2, 2.4, false, 'easeInOutQuint', 500);
                    await this.delay(500);
                }
            },
            7: () => {
                this.setText('tekstInfo', this.appLines['stap_5']);
                this.setObjectsVisible(['cirkel_{A}', 'AB', 'BS', 'B', 'AP', 'PQ', 'QS', 'P', 'Q', 'hoek_{PQS}'], true);
                this.setObjectsVisible(['AS', 'cirkel_{B1}', 'cirkel_{S}', 'D', 'BD', 'DS', 'hulpstuk_{D}'], false);
                this.setHighlightBlue(['cirkel_{A}']);
                this.setHighlightRed(['AB']);
                this.setHighlightGreen(['BS']);
            },
            8: () => {
                this.setText('tekstInfo', this.appLines['stap_6']);
                this.setObjectsVisible(['cirkel_{B1}', 'cirkel_{S}', 'D', 'BD', 'DS', 'hulpstuk_{D}', 'S'], true);
                this.setObjectsVisible(['AP', 'PQ', 'QS', 'P', 'Q', 'cirkel_{A}', 'hoek_{PQS}', 'BS', 'cirkel_{B2}', 'cirkel_{D}', 'C', 'BC', 'CD'], false);
                this.resetHighlight(['AB', 'BS']);
                this.setHighlightBlue(['cirkel_{B1}']);
                this.setHighlightGreen(['cirkel_{S}']);
                this.setHighlightBlack(['hulpstuk_{D}']);
                this.setHighlightRed(['BD']);
            },
            9: () => {
                this.setText('tekstInfo', this.appLines['stap_7']);
                this.setObjectsVisible(['cirkel_{B1}', 'cirkel_{S}', 'DS', 'hulpstuk_{D}', 'S'], false);
                this.setObjectsVisible(['hoek_{BAC}','hoek_{CDE}', 'hoek_{DBC}', 'hoek_{DCG}', 'hulpstuk_{AC}', 'hulpstuk_{AD}','hoek_{CBA}'], false);
                this.setObjectsVisible(['cirkel_{B2}', 'cirkel_{D}', 'C', 'BC', 'CD'], true);
                this.resetHighlight(['BD']);
                this.setHighlightBlue(['cirkel_{B2}']);
                this.setHighlightGreen(['cirkel_{D}']);
                this.setHighlightBlack(['BC', 'CD']);
            },
            10: () => { 
                this.setText('tekstInfo', this.appLines['stap_8']);
                this.setObjectsVisible(['hoek_{BAC}','hoek_{CDE}', 'hoek_{DBC}', 'hoek_{DCG}', 'hulpstuk_{AC}', 'hulpstuk_{AD}', 'hoek_{CBA}'], true);
                this.setObjectsVisible(['cirkel_{B2}', 'cirkel_{D}', 'E', 'DE'], false);
                this.resetHighlight(['BC', 'CD']);
                this.setHighlightBlack(['hulpstuk_{AC}', 'hulpstuk_{AD}']);
                this.appletObject.setLineStyle('hulpstuk_{AC}', 1);
                this.appletObject.setLineStyle('hulpstuk_{AD}', 1);
            },
            11: () => {
                this.setText('tekstInfo', this.appLines['stap_9']);
                this.resetHighlight(['hulpstuk_{AC}', 'hulpstuk_{AD}']);
                this.setObjectsVisible(['cirkel_{D}', 'E', 'DE'], true);
                this.setObjectsVisible(['cirkel_{C}', 'G', 'CG'], false);
                this.setHighlightGreen(['cirkel_{D}']);
                this.setHighlightBlack(['DE']);
                this.appletObject.setLineStyle('hulpstuk_{AC}', 0);
                this.appletObject.setLineStyle('hulpstuk_{AD}', 0);
            },
            12: () => {
                this.setText('tekstInfo', this.appLines['stap_10']);
                this.resetHighlight(['DE']);
                this.setObjectsVisible(['cirkel_{C}', 'G', 'CG'], true);
                this.setObjectsVisible(['cirkel_{D}', 'cirkel_{G}', 'cirkel_{E}', 'F', 'FG', 'EF'], false);
                this.setHighlightGreen(['cirkel_{C}']);
                this.setHighlightBlack(['CG']);
                this.appletObject.setLineStyle('hulpstuk_{AC}', 0);
                this.appletObject.setLineStyle('hulpstuk_{AD}', 0);
            },
            13: () => {
                this.setText('tekstInfo', this.appLines['stap_11']);
                this.resetHighlight(['CG']);
                this.setObjectsVisible(['cirkel_{C}'], false);
                this.setObjectsVisible(['cirkel_{G}', 'cirkel_{E}', 'F', 'FG', 'EF'], true);
                this.setHighlightBlue(['cirkel_{G}']);
                this.setHighlightGreen(['cirkel_{E}']);
                this.setHighlightBlack(['FG', 'EF']);   
            },
            14: async () => {
                this.setText('tekstInfo', '');
                this.setObjectsVisible(['cirkel_{G}', 'cirkel_{E}', 'AC'], false);
                this.setObjectsVisible(['hulpstuk_{AC}', 'hulpstuk_{AD}', 'A', 'B', 'AB', 'BD', 'BC', 'hoek_{BAC}', 'hoek_{CBA}', 'hoek_{DBC}'], true);
                this.resetHighlight(['CD', 'DE', 'EF', 'CG', 'FG']);
        
                if (this.isPreviousState) {
                    await this.setZoomAnimated(-3.4, -1.2, 2.4, false, 'easeInOutQuint', 500);
                } 
            },
            15: async () => {
                this.setText('tekstInfo', this.appLines['bewijs_1']);
                this.setObjectsVisible(['hulpstuk_{AC}', 'hulpstuk_{AD}', 'A', 'B', 'AC', 'AB', 'BD', 'BC', 'hoek_{BAC}', 'hoek_{CBA}', 'hoek_{DBC}'], false);
                if (this.isNextState) {
                        await this.setZoomAnimated(-1.9, -0.8, 1.5, false, 'easeInOutQuint', 500);
                        this.setHighlightBlack(['CD', 'DE', 'EF', 'CG', 'FG']);
                } else {
                    this.setHighlightBlack(['CD', 'DE', 'EF', 'CG', 'FG']);
                    this.setObjectsVisible(['hoek_{DCG}'], true);
                    this.setObjectsVisible(['CE'], false);
                } 
            },
            16: () => {
                this.setText('tekstInfo', this.appLines['bewijs_2']);
                this.resetHighlight(['CD', 'DE', 'EF', 'CG', 'FG', 'CE', 'CD', 'DE', 'AC', 'AB', 'BC']);
                this.setHighlightBlack(['CE']);
                this.setObjectsVisible(['CE'], true);
                this.setObjectsVisible(['hoek_{DCG}', 'hoek_{DCE}', 'hoek_{CED}'], false);
                this.appletObject.evalCommand('SetDecoration(CE, 0)');
                this.appletObject.evalCommand('SetDecoration(AC, 0)');
            },
            17: () => {
                this.setText('tekstInfo', this.appLines['bewijs_3']);
                this.setObjectsVisible(['CE', 'hoek_{DCE}', 'hoek_{CED}', 'hoek_{CDE}'], true);
                this.setObjectsVisible(['hoek_{DCG}', 'DG'], false);
                this.setHighlightBlue(['CE', 'CD', 'DE']);
            },
            18: () => {
                this.setText('tekstInfo', this.appLines['bewijs_4']);        
                this.resetHighlight(['CE', 'CD', 'DE']);
                this.resetHighlight(['AC', 'AB', 'BC']);
                this.resetHighlight(['CG', 'DG', 'CD']);
                this.setHighlightBlack(['DG']);
                this.setObjectsVisible(['hoek_{CDE}', 'hoek_{DCE}', 'hoek_{CGD}', 'hoek_{GDC}'], false);
                this.setObjectsVisible(['hoek_{DCG}', 'DG'], true);
                this.appletObject.evalCommand('SetDecoration(DG, 0)');
            },
            19: () => {
                this.setText('tekstInfo', this.appLines['bewijs_5']);
                //ggbApplet.evalCommand('SetDecoration(DG, 2)');
                this.setObjectsVisible(['hoek_{CGD}', 'hoek_{GDC}', 'hoek_{DCG}'], true);
                this.setObjectsVisible(['hoek_{EDU}', 'hoek_{CED}', 'hoek_{DCE}', 'hoek_{UCG}', 'driehoek_{DCG}', 'driehoek_{EDC}'], false);
                this.setHighlightBlue(['CG', 'DG', 'CD']);
                //setHighlightGreen(['AC', 'AB', 'BC']); 
                this.resetHighlight(['CE', 'DE']);
            },
            20: () => {
                this.setText('tekstInfo', this.appLines['bewijs_6']);    
                this.setHighlightRed(['CE', 'DE']);
                this.setHighlightBlue(['CG', 'DG', 'CD']);
                this.setHighlightGreen(['AC', 'AB', 'BC']); 
                this.setObjectsVisible(['hoek_{DCG}','CU', 'EU', 'DU', 'GU','U'], false);
                this.setObjectsVisible(['hoek_{EDU}', 'hoek_{CED}', 'hoek_{DCE}', 'hoek_{UCG}', 'driehoek_{DCG}', 'driehoek_{EDC}', 'CE', 'DG'], true);
                this.appletObject.evalCommand('SetDecoration(CE, 2)');
                this.appletObject.evalCommand('SetDecoration(AC, 2)');        
                this.appletObject.evalCommand('SetDecoration(DG, 2)');
            },
            21: () => {
                this.setText('tekstInfo', this.appLines['bewijs_7']);
                this.setObjectsVisible(['hoek_{DUE}', 'driehoek_{DCG}', 'driehoek_{EDC}'], false);
                this.resetHighlight(['CE', 'DE', 'CG', 'DG', 'CD', 'AC', 'AB', 'BC', 'CU','DU', 'GU', 'EU']); 
                this.setObjectsVisible(['U', 'CU', 'EU','DU', 'GU'], true);
                this.setObjectsVisible(['driehoek_{CUD}', , 'hoek_{CUD}', 'hoek_{EUG}'], false);
                this.appletObject.evalCommand('SetDecoration(CE, 0)');
                this.appletObject.evalCommand('SetDecoration(AC, 0)');        
                this.appletObject.evalCommand('SetDecoration(DG, 0)');
                this.appletObject.evalCommand('SetDecoration(EU, 0)');
            },
            22: () => {
                this.setText('tekstInfo', this.appLines['bewijs_8']);
                this.setObjectsVisible(['driehoek_{CUD}', 'hoek_{CUD}', 'hoek_{EUG}'], true);
                this.setObjectsVisible(['hoek_{DUE}','hoek_{CUG}', 'driehoek_{CUG}', 'driehoek_{DUE}'], false);
                this.setHighlightBlue(['CU','DU']);
                this.setHighlightRed(['GU', 'EU']);
            },
            23: () => {
                this.setText('tekstInfo', this.appLines['bewijs_9']);
                this.setObjectsVisible(['driehoek_{CUD}'], false);
                this.setObjectsVisible(['hoek_{DUE}','hoek_{CUG}', 'driehoek_{CUG}', 'driehoek_{DUE}'], true);
                this.setHighlightBlue(['CU', 'GU']);
                this.setHighlightGreen(['DU', 'EU']);
                this.resetHighlight(['CG', 'DE']);
                this.appletObject.evalCommand('SetDecoration(EU, 0)');
                this.appletObject.evalCommand('SetDecoration(GU, 0)');  
            },
            24: () => {
                this.setText('tekstInfo', this.appLines['bewijs_10']);
                this.resetHighlight(['CU', 'DU']);
                this.setHighlightBlue(['CG']);
                this.setHighlightGreen(['GU']);
                this.setHighlightRed(['EU']);
                this.setHighlightPink(['DE']);
                this.appletObject.evalCommand('SetDecoration(EU, 1)');
                this.appletObject.evalCommand('SetDecoration(GU, 1)');
                this.appletObject.evalCommand('SetDecoration(CU, 0)');
                this.appletObject.evalCommand('SetDecoration(DU, 0)');
            },
            25: () => {
                this.setText('tekstInfo', this.appLines['bewijs_11']);
                this.setHighlightBlack(['CU', 'DU']);
                this.setHighlightBlue(['CG']);
                this.setHighlightGreen(['GU']);
                this.setHighlightRed(['EU']);
                this.setHighlightPink(['DE']);        
                this.appletObject.evalCommand('SetDecoration(CU, 2)');
                this.appletObject.evalCommand('SetDecoration(DU, 2)');
                this.setObjectsVisible([, 'driehoek_{CUG}', 'driehoek_{DUE}'], true);
            },
            26: () => {
                this.setText('tekstInfo', this.appLines['bonus_1']);
                this.resetHighlight(['CG', 'GU', 'EU', 'DE']);
                this.setObjectsVisible([, 'driehoek_{CUG}', 'driehoek_{DUE}'], false);
                this.setHighlightBlack(['CU', 'DU']);
                this.setObjectsVisible(['A', 'B', 'AB', 'AC', 'BC', 'BD', 'driehoek_{BCD}'], false);
                this.appletObject.evalCommand('SetDecoration(BD, 0)');
            },
            27: async () => {
                this.setText('tekstInfo', this.appLines['bonus_2']);
                this.resetHighlight(['CU', 'DU']);
        
                this.setObjectsVisible(['A', 'B', 'AB', 'AC', 'BC', 'BD', 'driehoek_{BCD}'], true);
                this.appletObject.evalCommand('SetDecoration(BD, 0)');
                if (this.isNextState) {
                    this.appletObject.setFilling('driehoek_{BCD}', 0);
                    await this.delay(500);
                    this.appletObject.setValue('rotatie_{BCD}', 0);
                    await this.fadePolygon('driehoek_{BCD}', 0.0, 0.5, 'easeInOutQuint', 500);
                    await this.animateFloat('rotatie_{BCD}', 0, -this.degreesToRadians(108), 'easeOutBounce', 2500);
                    await this.delay(200);
                    this.setText('tekstInfo', this.appLines['bonus_3']);
                    this.appletObject.evalCommand('SetDecoration(BD, 2)');
                }
            },
            28: () => {
                this.setText('tekstInfo', '');
                this.setObjectsVisible(['A', 'B', 'AB', 'AC', 'BC', 'BD', 'driehoek_{BCD}'], false);        
                this.setObjectsVisible(['EG'], false);
            },
            29: () => {
                this.setText('tekstInfo', this.appLines['bewijs_12']);
                this.setObjectsVisible(['EG'], true);
                this.setObjectsVisible(['driehoek_{EUG}', 'driehoek_{EFG}'], false);        
                this.setHighlightBlack(['EG']);
                this.resetHighlight(['EU', 'EF', 'GU', 'FG']);
            },
            30: () => {
                this.setText('tekstInfo', this.appLines['bewijs_13']);
                this.setHighlightBlack(['EG', 'EU', 'EF', 'GU', 'FG']);
                this.setObjectsVisible(['driehoek_{EUG}', 'driehoek_{EFG}'], true);
                this.setObjectsVisible(['hoek_{EFG}'], false);
            },
            31: () => {
                this.setText('tekstInfo', this.appLines['bewijs_14']);
                this.resetHighlight(['EG', 'EU', 'GU']);
                this.setObjectsVisible(['driehoek_{EUG}', 'driehoek_{EFG}', 'hoek_{UGE}', 'hoek_{EGF}', 'hoek_{GEU}', 'hoek_{FEG}'], false);
                this.setObjectsVisible(['hoek_{EFG}'], true);
            },
            32: () => {
                this.setText('tekstInfo', this.appLines['bewijs_15']);
                this.setObjectsVisible(['hoek_{UGE}', 'hoek_{EGF}', 'hoek_{GEU}', 'hoek_{FEG}'], true);
                this.resetHighlight(['CG', 'FG', 'DE', 'EF']);
            },
            33: async () => {
                this.setText('tekstInfo', this.appLines['bewijs_16']);
                this.setHighlightBlue(['CG', 'FG']);
                this.setHighlightGreen(['DE', 'EF']);
                if (this.isPreviousState) {
                    this.setObjectsVisible(['hoek_{CUG}', 'hoek_{CUD}', 'hoek_{DUE}', 'hoek_{EUG}', 'U', 'CU', 'EU', 
                    'DU', 'GU', 'EG', 'DG', 'CE', 'hoek_{CGD}', 'hoek_{UGE}', 'hoek_{EGF}', 'hoek_{UCG}', 'hoek_{DCE}',
                    'hoek_{GDC}', 'hoek_{EDU}', 'hoek_{CED}', 'hoek_{GEU}', 'hoek_{FEG}'], true);
                    this.setObjectsVisible(['hoek_{FED}', 'hoek_{CGF}', 'hoek_{CGF}', 'hoek_{DCG}', 'hoek_{CDE}', 'hoek_{FED}'], false);
                    this.setZoomAnimated(-1.9, -0.8, 1.5, false, 'easeInOutQuint', 500);
                }
            },
            34: async () => {
                this.setText('tekstInfo', '');
                this.resetHighlight(['CG', 'FG', 'DE', 'EF']);
                await this.setZoomAnimated(-0.85, -0.8, 1.5, false, 'easeInOutQuint', 1500);
                let d = 100;
                let objects = ['hoek_{CUG}', 'hoek_{CUD}', 'hoek_{DUE}', 'hoek_{EUG}', 'U', 'CU', 'EU', 'DU', 'GU', 'EG', 'DG', 'CE'];
                for (let object of objects) {
                    this.appletObject.setVisible(object, false);
                    await this.delay(d);
                }
                objects = ['hoek_{CGD}', 'hoek_{UGE}', 'hoek_{EGF}'];
                for (let object of objects) {
                    this.appletObject.setVisible(object, false);
                    await this.delay(d);
                }
                this.appletObject.setVisible('hoek_{CGF}', true);
                await this.delay(d);
    
                objects = ['hoek_{UCG}', 'hoek_{DCE}'];
                for (let object of objects) {
                    this.appletObject.setVisible(object, false);
                    await this.delay(d);
                }  
                this.appletObject.setVisible('hoek_{DCG}', true);
                await this.delay(d);
    
                objects = ['hoek_{GDC}', 'hoek_{EDU}'];
                for (let object of objects) {
                    this.appletObject.setVisible(object, false);
                    await this.delay(d);
                }
                this.appletObject.setVisible('hoek_{CDE}', true);                    
                await this.delay(d);
    
                objects = ['hoek_{CED}', 'hoek_{GEU}', 'hoek_{FEG}'];
                for (let object of objects) {
                    this.appletObject.setVisible(object, false);
                    await this.delay(d);
                }
                this.appletObject.setVisible('hoek_{FED}', true);         
                await this.delay(d);
                await this.delay(1000);
                this.setText('tekstInfo', this.appLines['Q.E.D.']);
            }
        }
    }
}
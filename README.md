# Synthetische Meetkunde Presentatie

Voorbeeld hoe je geogebra in combinatie met RevealJS kan gebruiken om een leuke presentatie te maken die in de browser kan worden bekeken.
Bekijk hier de presentatie: https://jildert.com/studie/synthetischemeetkunde/eindpresentatie/
_(Met F11 kan je in de meeste browser overschakelen naar fullscreen en weer terug)_

Sinds deze geogebra update https://www.reddit.com/r/geogebra/comments/1c5cfvo/breaking_change_javascript_sandboxing_from_v839/ zijn een hoop dingen niet meer mogelijk met javascript die binnen de geogebra applet sandbox draait. De oplossing hiervoor is om de javascript buiten de applet de draaien. Door bijvoorbeeld de deployggb.js script van geogebra te gebruiken. Deze manier is hier ook gebruikt. Een eventueel nadeel hiervan is dat je het wel ergens zelf moet gaan hosten.

Verder werkt de presentatie met de knoppen Page Up en Page Down of pijl naar links en rechts. Dus het werkt ook met de meeste presentatie afstandsbedieningen.
Met pijl naar benden en boven kunnen de slides die geogebra gebruiken worden overgeslagen.

De formules van de easingsanimaties kan je ook terug vinden op https://easings.net.

## Applets
De verschillende applets bevinden zich in de applets directory en bestaan uit een combinatie .ggb en .js bestand. De geogebra bestanden hebben alleen maar de grafische objecten en alles wordt via het javascript script aangestuurd. Alle javascript applet classes erven over van de "applet-base.js" waarin zich alle animate code bevindt.

## Font
Geogebra gebruikt voor LaTeX formules het Computer Modern lettertype. Binnen dit lettertype heb je verschillende variaties. Via LaTeX forceren we CM - Sans Serif voor alle formules en tekst. Deze gebruiken we ook voor de slides die geen geogebra gebruiken en worden dus via de css ingeladen.

## Lokaal Draaien
Doordat we alle bestanden voorhanden hebben kunnen we de webpresentatie ook lokaal draaien, handig mocht je je ergens op aarde bevinden waar geen internet is. Installeer hiervoor nodejs en via npm installeer je dan bijvoorbeeld http-server package. Deze kan je opstarten door naar de directory te gaan waar het index.html bestand zich bevindt en hier een nieuwe terminal/console openen en het commando http-server draaien om tijdelijk een lokale server te draaien.

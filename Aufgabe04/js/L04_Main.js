"use strict";
/*
Aufgabe: Aufgabe 4
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 16.05.2020
Hiermit versichere ich, dass ich diesen Code selbst mit Johannes&Sebastian zusammen erstellt habe...
*/
var HaushaltshilfeData;
(function (HaushaltshilfeData) {
    window.addEventListener("load", init);
    function init() {
        Inhaltgenerieren(HaushaltshilfeData.alleProdukte);
        Inhaltgenerieren2(HaushaltshilfeData.alleDienstleistungen);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
        }
    }
    let fieldset = document.createElement("fieldset");
    let fieldset2 = document.createElement("fieldset");
    let legend = document.createElement("legend");
    let legend2 = document.createElement("legend");
    function Inhaltgenerieren(_Produkte, _Dienstleistung) {
        document.getElementById("Einkaufen").appendChild(fieldset);
        fieldset.appendChild(legend);
        legend.innerText = "Produkt";
        for (let currentPosition in _Produkte) {
            let Produkte = _Produkte[currentPosition];
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset.appendChild(checkbox);
            let div = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = Produkte.name + " " + Produkte.unit + " " + Produkte.price + "€";
        }
    }
    function Inhaltgenerieren2(_Dienstleistung) {
        document.getElementById("dienstleistung").appendChild(fieldset2);
        fieldset2.appendChild(legend2);
        legend2.innerText = "Dienstleistung";
        for (let currentPosition in _Dienstleistung) {
            let dienstleistung = _Dienstleistung[currentPosition];
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset2.appendChild(checkbox);
            let div = document.createElement("div");
            fieldset2.appendChild(div);
            div.innerText = dienstleistung.name + " " + dienstleistung.price + "€";
        }
    }
})(HaushaltshilfeData || (HaushaltshilfeData = {}));
//# sourceMappingURL=L04_Main.js.map
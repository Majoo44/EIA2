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
    let wasser = { name: "Wasser", unit: "Liter", price: 0.19 };
    let brot = { name: "Brot", unit: "Gramm", price: 0.99 };
    let klopapier = { name: "Klopapier", unit: "Stück", price: 1.59 };
    HaushaltshilfeData.alleProdukte = [wasser, brot, klopapier];
    let bodenwischen = { name: "Boden wischen", price: 50 };
    let rasenmähen = { name: "Rasen Mähen", price: 30 };
    let fensterputzen = { name: "Fenster putzen", price: 70 };
    HaushaltshilfeData.alleDienstleistungen = [bodenwischen, rasenmähen, fensterputzen];
})(HaushaltshilfeData || (HaushaltshilfeData = {}));
//# sourceMappingURL=L04_Data.js.map
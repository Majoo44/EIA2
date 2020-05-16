/*
Aufgabe: Aufgabe 4
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 16.05.2020
Hiermit versichere ich, dass ich diesen Code selbst mit Johannes&Sebastian zusammen erstellt habe...
*/
namespace HaushaltshilfeData {
    window.addEventListener("load", init);

    function init(): void {
        Inhaltgenerieren(alleProdukte);
        Inhaltgenerieren2(alleDienstleistungen);


        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
        }
    }

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let fieldset2: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");
    let legend2: HTMLLegendElement = document.createElement("legend");

    function Inhaltgenerieren(_Produkte: Produkte[], _Dienstleistung: Dienstleistung[]): void {
        document.getElementById("Einkaufen").appendChild(fieldset);
        fieldset.appendChild(legend);
        legend.innerText = "Produkt";
        

        for (let currentPosition in _Produkte) {
            let Produkte: Produkte = _Produkte[currentPosition];
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset.appendChild(checkbox);
            let div: HTMLDivElement = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = Produkte.name + " " + Produkte.unit + " " + Produkte.price + "€";
            }
        }

    function Inhaltgenerieren2(_Dienstleistung: Dienstleistung[]): void {
            document.getElementById("dienstleistung").appendChild(fieldset2);
            fieldset2.appendChild(legend2);
            legend2.innerText = "Dienstleistung";
            
    
            for (let currentPosition in _Dienstleistung) {
                let dienstleistung: Dienstleistung = _Dienstleistung[currentPosition];
                let checkbox: HTMLInputElement = document.createElement("input");
                checkbox.type = "checkbox";
                fieldset2.appendChild(checkbox);
                let div: HTMLDivElement = document.createElement("div");
                fieldset2.appendChild(div);
                div.innerText = dienstleistung.name + " " + dienstleistung.price + "€";
                }
        }

    }
        

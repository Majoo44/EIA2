/*
Aufgabe: Aufgabe 4
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 16.05.2020
Hiermit versichere ich, dass ich diesen Code selbst mit Johannes&Sebastian zusammen erstellt habe...
*/
namespace HaushaltshilfeData {
    export interface Produkte {
        name: string;
        unit: string;
        price: number;
    }
    export interface Dienstleistung {
        name: string;
        price: number;
    }

    let wasser: Produkte = { name: "Wasser", unit: "Liter", price: 0.19 };
    let brot: Produkte = { name: "Brot", unit: "Gramm", price: 0.99 };
    let klopapier: Produkte = { name: "Klopapier", unit: "Stück", price: 1.59 };

    export let alleProdukte: Produkte[] = [wasser, brot, klopapier];

    let bodenwischen: Dienstleistung = { name: "Boden wischen", price: 50 };
    let rasenmähen: Dienstleistung = { name: "Rasen Mähen", price: 30 };
    let fensterputzen: Dienstleistung = { name: "Fenster putzen", price: 70 };

    export let alleDienstleistungen: Dienstleistung[] = [bodenwischen, rasenmähen, fensterputzen];
}


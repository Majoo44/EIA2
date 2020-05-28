/*
Aufgabe: Aufgabe 5
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 23.05.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen auf der Pages Seite geschrieben habe... 
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/
namespace HaushaltshilfeData {
    export function generateContent(_data: Data): void {

        for (let category in _data) {
            let items: Item[] = _data[category];
            let group: HTMLElement | null = null;
            switch (category) {
                case "Produkte":
                    group = mehrfachauswahl(items, category);
                    break;

                case "Supermarkt":
                    group = einfacheauswahldropdown(items, category);
                    break;

                case "Hausarbeiten":
                    group = einfacheauswahldropdown(items, category);
                    break;

                case "Zahlung":
                    group = einfacheauswahlradio(items, category);
                    break;

                default:
                break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }

        function einfacheauswahldropdown(_items: Item[], _category: string): HTMLElement | null {
            let group: HTMLDivElement = document.createElement("div");
            let select: HTMLSelectElement = document.createElement("select");
            select.name = _category;
            for (let item of _items) {
                let newoption: HTMLOptionElement = document.createElement("option");
                newoption.text = item.name;
                select.add(newoption);
                newoption.setAttribute("price", item.price.toFixed(2));
                newoption.value = item.name;
                group.appendChild(select);
            }
            return group;
        }

        function einfacheauswahlradio(_items: Item[], _category: string): HTMLElement | null {
            let group: HTMLDivElement = document.createElement("div");
            for (let item of _items) {
                let radio: HTMLInputElement = document.createElement("input");
                radio.type = "radio";
                radio.setAttribute("price", item.price.toFixed(2));
                radio.setAttribute("einheit", item.einheit);
                radio.value = item.name;
                radio.name = _category;
                radio.id = item.name;
                let label: HTMLLabelElement = document.createElement("label");
                label.textContent = item.name;
                label.htmlFor = item.name;
                group.appendChild(radio);
                group.appendChild(label);
            }

            return group;
        }

        function mehrfachauswahl(_items: Item[], _category: string): HTMLElement | null {
            let group: HTMLDivElement = document.createElement("div");
            for (let item of _items) {
                let checkbox: HTMLInputElement = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("price", item.price.toFixed(2));
                checkbox.setAttribute("einheit", item.einheit);
                checkbox.value = item.name;
                checkbox.name = _category;
                checkbox.id = item.name;
                let label: HTMLLabelElement = document.createElement("label");
                label.textContent = item.name;
                label.htmlFor = item.name;
                group.appendChild(checkbox);
                group.appendChild(label);
                let menge: HTMLInputElement = document.createElement("input");
                menge.type = "number";
                menge.name = item.name + "Menge";
                menge.max = "100";
                menge.min = "0";
                menge.step = "1";
                menge.value = "0";
                group.appendChild(menge);
            }
            return group;
        }
    }
    export interface Item {
        name: string;
        price: number;
        einheit: string;
    }

    export interface Data {
        [category: string]: Item[];
    }
}

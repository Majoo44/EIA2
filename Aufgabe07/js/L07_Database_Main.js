"use strict";
/*
Aufgabe: Aufgabe 7
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 06.06.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen auf der Pages Seite geschrieben habe...
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/
var HaushaltshilfeDatabase;
(function (HaushaltshilfeDatabase) {
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        let response = await fetch("data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        HaushaltshilfeDatabase.generateContent(data);
        let form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        document.querySelector("#button")?.addEventListener("click", handleClick);
    }
    function handleClick() {
        // alert("Danke für deine Bestellung!");
        let form = document.querySelector("form");
        let data = new FormData(form);
        let url = "https://whatever.server/path/file";
        let query = new URLSearchParams(data);
        url += "?" + query.toString();
        alert(url);
    }
    function handleChange(_event) {
        let order = document.querySelector("#order");
        order.innerHTML = "";
        let data = new FormData(document.forms[0]);
        let total = 0;
        for (let entry of data) {
            if (entry[0] == "Produkte") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                let amount = Number(data.get(entry[1] + "Menge"));
                let einheit = (item.getAttribute("einheit"));
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }
            if (entry[0] == "Geld") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let betrag = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " + betrag + " €" + " <br>" + "<br>";
                total += 5;
            }
            if (entry[0] == "Hausarbeiten") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                total += price;
                order.innerHTML += item.value + ": " + price + " €" + "<br> <br>";
            }
            if (entry[0] == "Zahlung") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += "<hr> Zahlungsmethode: " + item.value + "<br> <br>";
            }
        }
        let supermarkt = data.get("Supermarkt");
        order.innerHTML += "Supermarkt Vorgabe: " + supermarkt + "<br>" + "<hr>" + "<h3>Total(mit Gebühr): " + total + "€<h3><hr>";
    }
})(HaushaltshilfeDatabase || (HaushaltshilfeDatabase = {}));
//# sourceMappingURL=L07_Database_Main.js.map
/*
Aufgabe: Aufgabe 0, 
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 22.03.2019, 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

function Eingabefeld() {
    var Name=prompt("Wie heißt du?");
    var node: HTMLElement=document.getElementById("inhalt");
    node.innerHTML += "Hallo ";
    node.innerHTML += Name;
    node.innerHTML += ", alles klar bei dir?";
    console.log("Hallo", Name, ", alles klar bei dir?")
}

document.addEventListener("DOMContentLoaded", Eingabefeld)
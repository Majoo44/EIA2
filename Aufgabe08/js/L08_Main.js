"use strict";
/*
Aufgabe: Aufgabe 8
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 13.06.2020
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe...
*/
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
crc2.fillStyle = "#FFFF00";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.beginPath();
crc2.arc(20, 20, 20, 0.5, 1.2 * Math.PI, true);
crc2.stroke();
//# sourceMappingURL=L08_Main.js.map
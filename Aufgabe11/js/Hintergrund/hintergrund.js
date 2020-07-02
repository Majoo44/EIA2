"use strict";
/*
Aufgabe: Aufgabe 11
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 03.07.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
var L10Inheritance;
(function (L10Inheritance) {
    class Hintergrund {
        constructor(_position) {
            this.position = _position;
        }
        draw(_position) {
            let gradient = L10Inheritance.crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, "rgb(150, 0, 76)");
            gradient.addColorStop(1, "rgb(255, 0, 0)");
            let pattern = document.createElement("canvas").getContext("2d");
            L10Inheritance.crc2.fillStyle = gradient;
            L10Inheritance.crc2.fillRect(0, 0, L10Inheritance.crc2.canvas.width, L10Inheritance.crc2.canvas.height);
            pattern.canvas.width = 40;
            pattern.canvas.height = 20;
            pattern.fillStyle = "Transparent";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 10);
            pattern.lineTo(10, 10);
            pattern.lineTo(20, 0);
            pattern.lineTo(30, 0);
            pattern.lineTo(40, 10);
            pattern.lineTo(30, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(10, 10);
            pattern.stroke();
            L10Inheritance.crc2.fillStyle = L10Inheritance.crc2.createPattern(pattern.canvas, "repeat");
            L10Inheritance.crc2.fillRect(0, 0, L10Inheritance.crc2.canvas.width, L10Inheritance.crc2.canvas.height);
        }
    }
    L10Inheritance.Hintergrund = Hintergrund;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=hintergrund.js.map
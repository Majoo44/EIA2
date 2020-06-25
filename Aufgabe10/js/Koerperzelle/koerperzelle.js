"use strict";
/*
Aufgabe: Aufgabe 10
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 27.06.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
var L10Inheritance;
(function (L10Inheritance) {
    class Koerperzelle extends L10Inheritance.Zelle {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10Inheritance.Vector(0, 0);
            this.radius = 20;
            this.velocity = new L10Inheritance.Vector(0, 0);
            this.velocity.random(10, 30);
        }
        draw() {
            L10Inheritance.crc2.save();
            L10Inheritance.crc2.translate(this.position.x, this.position.y);
            let gradient = L10Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            L10Inheritance.crc2.beginPath();
            L10Inheritance.crc2.arc(this.position.x, this.position.y, this.radius, 10, 15 * Math.PI);
            L10Inheritance.crc2.closePath();
            gradient.addColorStop(0, "#4B088A");
            L10Inheritance.crc2.fillStyle = "#4B088A";
            L10Inheritance.crc2.lineWidth = 10;
            L10Inheritance.crc2.strokeStyle = "#FFFFFF";
            L10Inheritance.crc2.stroke();
            L10Inheritance.crc2.fill();
            L10Inheritance.crc2.restore();
        }
    }
    L10Inheritance.Koerperzelle = Koerperzelle;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=koerperzelle.js.map
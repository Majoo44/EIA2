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
    class Partikel extends L10Inheritance.Zelle {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10Inheritance.Vector(0, 0);
            this.velocity = new L10Inheritance.Vector(0, 0);
            this.velocity.random(150, 200);
            this.radius = (Math.random() * 5) + 2;
        }
        draw() {
            console.log("draw Particle");
            let gradient = L10Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            L10Inheritance.crc2.save();
            L10Inheritance.crc2.beginPath();
            L10Inheritance.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            L10Inheritance.crc2.closePath();
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 0%, 100%, 0%)");
            gradient.addColorStop(1, "#FF0040");
            L10Inheritance.crc2.fillStyle = gradient;
            L10Inheritance.crc2.fill();
            L10Inheritance.crc2.restore();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= 0.1;
            offset.y *= _timeslice * 1.2;
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L10Inheritance.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L10Inheritance.crc2.canvas.height;
            }
            if (this.position.x > L10Inheritance.crc2.canvas.width) {
                this.position.x -= L10Inheritance.crc2.canvas.width;
            }
            if (this.position.y > L10Inheritance.crc2.canvas.height) {
                this.position.y -= L10Inheritance.crc2.canvas.height;
            }
        }
    }
    L10Inheritance.Partikel = Partikel;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=partikel.js.map
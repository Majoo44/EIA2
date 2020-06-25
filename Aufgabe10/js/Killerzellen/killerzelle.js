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
    class Killerzelle extends L10Inheritance.Zelle {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10Inheritance.Vector(0, 0);
            this.velocity = new L10Inheritance.Vector(0, 0);
            this.velocity.random(2, 6);
            this.rotation = Math.random() * 360;
        }
        draw() {
            let antikoerper = new Path2D();
            antikoerper.arc(this.position.x, this.position.y, 20, 0, 1.5 * Math.PI);
            L10Inheritance.crc2.fillStyle = "lightblue";
            L10Inheritance.crc2.fill(antikoerper);
            L10Inheritance.crc2.stroke(antikoerper);
        }
    }
    L10Inheritance.Killerzelle = Killerzelle;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=killerzelle.js.map
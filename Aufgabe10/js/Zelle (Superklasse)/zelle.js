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
    class Zelle {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10Inheritance.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10Inheritance.Vector(0, 0);
        }
        // tslint:disable-next-line: no-empty
        draw() {
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L10Inheritance.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10Inheritance.crc2.canvas.height;
            if (this.position.x > (L10Inheritance.crc2.canvas.width))
                this.position.x -= (L10Inheritance.crc2.canvas.width);
            if (this.position.y > L10Inheritance.crc2.canvas.height)
                this.position.y -= L10Inheritance.crc2.canvas.height;
        }
    }
    L10Inheritance.Zelle = Zelle;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=zelle.js.map
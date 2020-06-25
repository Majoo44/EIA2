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
    class Coronazelle extends L10Inheritance.Zelle {
        constructor(_position) {
            super(_position);
            this.infected = false;
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10Inheritance.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10Inheritance.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw() {
            let virusSpike = new Path2D();
            for (let i = 0; i < 10; i++) {
                virusSpike.moveTo(this.position.x + 70, this.position.y);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                virusSpike.moveTo(this.position.x - 70, this.position.y);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                virusSpike.moveTo(this.position.x, this.position.y + 70);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                virusSpike.moveTo(this.position.x, this.position.y - 70);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                L10Inheritance.crc2.fillStyle = "#52040D";
                L10Inheritance.crc2.fill(virusSpike);
                L10Inheritance.crc2.stroke(virusSpike);
                let virusRand = new Path2D();
                virusRand.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
                L10Inheritance.crc2.fillStyle = "#E45465";
                L10Inheritance.crc2.fill(virusRand);
                L10Inheritance.crc2.stroke(virusRand);
                let virusKern = new Path2D();
                virusKern.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
                L10Inheritance.crc2.fillStyle = "#F40824";
                L10Inheritance.crc2.fill(virusKern);
                L10Inheritance.crc2.stroke(virusKern);
            }
        }
        move(_timeslice) {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2);
                }
                else {
                    super.move(_timeslice);
                }
            }
        }
        isInfected() {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    L10Inheritance.Coronazelle = Coronazelle;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=coronazelle.js.map
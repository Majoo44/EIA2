"use strict";
/*
Aufgabe: Aufgabe 10
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 27.06.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen auf der Pages Seite geschrieben habe...
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/
var L10Inheritance;
(function (L10Inheritance) {
    class Partikel {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10Inheritance.Vector(0, 0);
            this.velocity = new L10Inheritance.Vector(0, 20);
            this.velocity.random(10, 50);
            console.log(this.velocity);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L10Inheritance.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10Inheritance.crc2.canvas.height;
            if (this.position.x > L10Inheritance.crc2.canvas.width)
                this.position.x -= L10Inheritance.crc2.canvas.width;
            if (this.position.y > L10Inheritance.crc2.canvas.height)
                this.position.y -= L10Inheritance.crc2.canvas.height;
        }
        draw() {
            let radiusPartikel = 10;
            let partikels = new Path2D();
            let gradient = L10Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusPartikel);
            partikels.arc(0, 0, radiusPartikel, 0, 2 * Math.PI);
            gradient.addColorStop(0, "rgba(20, 0, 76, 0.5)");
            gradient.addColorStop(1, "rgba(255, 0, 76, 0)");
            L10Inheritance.crc2.resetTransform();
            L10Inheritance.crc2.translate(this.position.x, this.position.y);
            L10Inheritance.crc2.fillStyle = gradient;
            L10Inheritance.crc2.scale(this.size, this.size);
            L10Inheritance.crc2.fill(partikels);
            L10Inheritance.crc2.restore();
        }
    }
    L10Inheritance.Partikel = Partikel;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=Partikel.js.map
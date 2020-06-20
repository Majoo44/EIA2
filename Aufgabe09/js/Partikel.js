"use strict";
/*
Aufgabe: Aufgabe 9
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 20.06.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen (Hier von Dominik Wieck) auf der Pages Seite geschrieben habe...
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/
var L09Classes;
(function (L09Classes) {
    class Partikel {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09Classes.Vector(0, 0);
            this.velocity = new L09Classes.Vector(0, 20);
            this.velocity.random(10, 50);
            console.log(this.velocity);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L09Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09Classes.crc2.canvas.height;
            if (this.position.x > L09Classes.crc2.canvas.width)
                this.position.x -= L09Classes.crc2.canvas.width;
            if (this.position.y > L09Classes.crc2.canvas.height)
                this.position.y -= L09Classes.crc2.canvas.height;
        }
        draw() {
            let radiusPartikel = 10;
            let partikels = new Path2D();
            let gradient = L09Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusPartikel);
            partikels.arc(0, 0, radiusPartikel, 0, 2 * Math.PI);
            gradient.addColorStop(0, "rgba(20, 0, 76, 0.5)");
            gradient.addColorStop(1, "rgba(255, 0, 76, 0)");
            L09Classes.crc2.resetTransform();
            L09Classes.crc2.translate(this.position.x, this.position.y);
            L09Classes.crc2.fillStyle = gradient;
            L09Classes.crc2.scale(this.size, this.size);
            L09Classes.crc2.fill(partikels);
            L09Classes.crc2.restore();
        }
    }
    L09Classes.Partikel = Partikel;
})(L09Classes || (L09Classes = {}));
//# sourceMappingURL=Partikel.js.map
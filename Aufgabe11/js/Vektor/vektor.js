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
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        scale(_scale) {
            this.x *= _scale;
            this.y *= _scale;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L10Inheritance.Vector = Vector;
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=vektor.js.map
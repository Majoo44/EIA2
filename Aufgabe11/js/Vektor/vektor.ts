/*
Aufgabe: Aufgabe 11
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 03.07.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
namespace L10Inheritance  {

    export class Vector {
        x: number; 
        y: number; 

        constructor(_x: number, _y: number) {
            this.x = _x; 
            this.y = _y; 
        }

        set(_x: number, _y: number): void {
            this.x = _x; 
            this.y = _y; 
        }

        add(_addend: Vector): void {

            this.x += _addend.x; 
            this.y += _addend.y; 
        }

        scale(_scale: number): void {
            this.x *= _scale; 
            this.y *= _scale; 
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        
        }

        copy(): Vector {
            return new Vector(this.x, this.y); 
        }
    }
}
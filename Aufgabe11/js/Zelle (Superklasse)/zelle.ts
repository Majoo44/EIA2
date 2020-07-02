/*
Aufgabe: Aufgabe 11
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 03.07.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
namespace L10Inheritance {

    export class Zelle {

        position: Vector;
        radius: number; 
        velocity: Vector;

        constructor(_position?: Vector) {
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
            this.radius = 5;
            this.velocity = new Vector(0, 0);  
        }

        // tslint:disable-next-line: no-empty
        draw(): void {
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}
/*
Aufgabe: Aufgabe 10
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 27.06.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
namespace L10Inheritance {

    export class Killerzelle extends Zelle {
        rotation: number;
        constructor(_position?: Vector) {
            super(_position); 
            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(2, 6);
            this.rotation = Math.random() * 360; 
        }

        draw(): void {
            let antikoerper: Path2D = new Path2D();
            antikoerper.arc(this.position.x, this.position.y, 20, 0, 1.5 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill(antikoerper);
            crc2.stroke(antikoerper);
        }      
    }
}
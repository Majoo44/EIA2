/*
Aufgabe: Aufgabe 10
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 27.06.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
namespace L10Inheritance {

    export class Hintergrund {
        position: Vector;
        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_position: Vector): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);

            gradient.addColorStop(0, "rgb(150, 0, 76)");
            gradient.addColorStop(1, "rgb(255, 0, 0)");
            let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");


            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


            pattern.canvas.width = 40;
            pattern.canvas.height = 20;

            pattern.fillStyle = "Transparent";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 10);
            pattern.lineTo(10, 10);
            pattern.lineTo(20, 0);
            pattern.lineTo(30, 0);
            pattern.lineTo(40, 10);
            pattern.lineTo(30, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(10, 10);
            pattern.stroke();

            crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }
}
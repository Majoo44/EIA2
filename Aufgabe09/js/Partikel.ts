/*
Aufgabe: Aufgabe 9
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 20.06.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen (Hier von Dominik Wieck) auf der Pages Seite geschrieben habe... 
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/
namespace L09Classes {

    export class Partikel {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 20);
            this.velocity.random(10, 50);
            console.log(this.velocity);
            this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {

            let radiusPartikel: number = 10;
            let partikels: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusPartikel);

            partikels.arc(0, 0, radiusPartikel, 0, 2 * Math.PI);
            gradient.addColorStop(0, "rgba(20, 0, 76, 0.5)");
            gradient.addColorStop(1, "rgba(255, 0, 76, 0)");

            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.scale(this.size, this.size);
            crc2.fill(partikels);
            crc2.restore();
        }
    }
}
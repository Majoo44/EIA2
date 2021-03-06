/*
Aufgabe: Aufgabe 9
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 20.06.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen auf der Pages Seite geschrieben habe... 
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/
namespace L09Classes {
    window.addEventListener("load", handleLoad);
    let partikels: Partikel[] = [];
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        window.setInterval(update, 20);
        Partikelkreieren(100);
    }

    function Partikelkreieren(partikelkr: number): void {

        for (let i: number = 0; i < partikelkr; i++) {
            let partikel: Partikel = new Partikel(1.0);
            partikels.push(partikel);
        }

    }

    function update(): void {
        for (let partikel of partikels) {
            partikel.move(1 / 20);
            partikel.draw();
        }
    }
}

interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface Point {
    x: number;
    y: number;
}

function generateRandomCluster(_area: Rectangle, _count: number): Point[] {
    let returnValue: Point[] = new Array();
    for (let i: number = 0; i < _count; i++) {
        let x: number = Math.random() * _area.width + _area.x;
        let y: number = Math.random() * _area.height + _area.y;
        let newPoint: Point = {
            x,
            y
        };
        returnValue.push(newPoint);
    }
    return returnValue;
}
document.addEventListener("DOMContentLoaded", init);
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 1140);
gradient.addColorStop(0, "rgb(180, 0, 76)");
gradient.addColorStop(1, "rgb(250, 0, 23)");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, canvas.width, canvas.height);

let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
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
crc2.fillRect(0, 0, canvas.width, canvas.height);

function init(): void {
    let koerperzellenbereich: Rectangle = {
        x: 0, y: 150, width: window.innerWidth, height: window.innerHeight / 15
    };

    let koerperzellenposition: Point[] = generateRandomCluster(koerperzellenbereich, 15);

    koerperzellenposition.forEach(function (item: Point): void {
        koerperzelle(item.x, item.y);
    });

    let coronazellenbereich: Rectangle = {
        x: 0, y: 600, width: window.innerWidth, height: window.innerHeight / 5
    };

    let coronazellenposition: Point[] = generateRandomCluster(coronazellenbereich, 10);

    coronazellenposition.forEach(function (item: Point): void {
        coronazelle(item.x, item.y);
    });

    let antikoerperbereich: Rectangle = {
        x: 0, y: 350, width: window.innerWidth, height: window.innerHeight / 10
    };

    let antikoerperposition: Point[] = generateRandomCluster(antikoerperbereich, 25);

    antikoerperposition.forEach(function (item: Point): void {
        antikoerper(item.x, item.y);
    });

    return;
    canvas = document.getElementsByTagName("canvas")[0];
    for (let i: number = 0; i < 7; i++) {
        let x: number = Math.random()   
        * canvas.width;
        let y: number = Math.random() * canvas.height;
        koerperzelle(x, y);
        // tslint:disable-next-line: align
    } for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        coronazelle(x, y);
    }
    for (let i: number = 0; i < 4; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        antikoerper(x, y);
    }
}


function koerperzelle(_x: number, _y: number): void {
    let koerperzelle: Path2D = new Path2D();
    koerperzelle.arc(_x, _y, 100, 0, 2 * Math.PI);
    crc2.fillStyle = "#044956";
    crc2.fill(koerperzelle);
    crc2.stroke(koerperzelle);

    let zellenkern: Path2D = new Path2D();
    zellenkern.arc(_x, _y, 80, 0, 2 * Math.PI);
    crc2.fillStyle = "#09BBDE";
    crc2.fill(zellenkern);
    crc2.stroke(zellenkern);
}

function coronazelle(_x: number, _y: number): void {

    let virusSpike: Path2D = new Path2D();
    for (let i: number = 0; i < 10; i++) {
        virusSpike.moveTo(_x + 70, _y);
        virusSpike.lineTo(_x - 25, _y - 10);
        virusSpike.lineTo(_x + 25, _y + 10);
        virusSpike.closePath();
        virusSpike.moveTo(_x - 70, _y);
        virusSpike.lineTo(_x - 25, _y - 10);
        virusSpike.lineTo(_x + 25, _y + 10);
        virusSpike.closePath();
        virusSpike.moveTo(_x, _y + 70);
        virusSpike.lineTo(_x - 25, _y - 10);
        virusSpike.lineTo(_x + 25, _y + 10);
        virusSpike.closePath();
        virusSpike.moveTo(_x, _y - 70);
        virusSpike.lineTo(_x - 25, _y - 10);
        virusSpike.lineTo(_x + 25, _y + 10);
        virusSpike.closePath();
        crc2.fillStyle = "#52040D";
        crc2.fill(virusSpike);
        crc2.stroke(virusSpike);

        let virusRand: Path2D = new Path2D();
        virusRand.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#E45465";
        crc2.fill(virusRand);
        crc2.stroke(virusRand);

        let virusKern: Path2D = new Path2D();
        virusKern.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#F40824";
        crc2.fill(virusKern);
        crc2.stroke(virusKern);
    }
}

function antikoerper(_x: number, _y: number): void {

    let antikoerper: Path2D = new Path2D();
    antikoerper.arc(_x, _y, 20, 0, 1.5 * Math.PI);
    crc2.fillStyle = "lightblue";
    crc2.fill(antikoerper);
    crc2.stroke(antikoerper);
}
window.onload = init;
window.onresize = init;
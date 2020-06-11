/*
Aufgabe: Aufgabe 8
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 13.06.2020
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe...
*/
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
crc2.canvas.width = window.innerWidth;
crc2.canvas.height = window.innerHeight;

let koerperzellen: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
let coronaviren: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);

gradient.addColorStop(0, "rgb(180, 0, 76)");
gradient.addColorStop(1, "rgb(250, 0, 23)");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, canvas.width, canvas.height);



/*function drawBackground(): void {
let gradient: CanvasGradient = crc2.createLinearGradient (0, 0, 0, crc2.canvas.height);
gradient.addColorStop(0, "lightblue");
gradient.addColorStop(0, "blue");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, canvas.width, canvas.height);

}
*/
//crc2.fillStyle = "#830305";
//crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

let pattern: CanvasRenderingContext = document.createElement("canvas").getContext("2d");
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

crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
crc2.fillRect(0, 0, canvas.width, canvas.height);

koerperzellen.beginPath();
koerperzellen.arc(300, 300, 150, 0, 2 * Math.PI, true);
koerperzellen.fillStyle = ("#2958AE");
koerperzellen.strokeStyle = ("rgb(200, 200, 200)");
koerperzellen.arc(600, 600, 25, 0, 2 * Math.PI, true);
koerperzellen.fillStyle = ("#2958AE");
koerperzellen.strokeStyle = ("rgb(200, 200, 200)");
koerperzellen.fill();
koerperzellen.stroke();


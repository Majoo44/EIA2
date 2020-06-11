/*
Aufgabe: Aufgabe 8
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 13.06.2020
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe...
*/
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
let bakterien: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
crc2.canvas.width = window.innerWidth;
crc2.canvas.height = window.innerHeight;

crc2.fillStyle = "#830305";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

crc2.beginPath();
crc2.arc(20, 20, 20, 0, 2 * Math.PI, true);
crc2.strokeStyle = "#2958AE";

crc2.stroke();

bakterien.fillStyle = "#2958AE";
bakterien.fillRect(100, 100, 20, 200);
bakterien.fillRect(500, 100, 20, 200);

bakterien.beginPath();
bakterien.ellipse(50, 50, 20, 30, 0, 0, 1, true); 
bakterien.stroke();
bakterien.strokeStyle = "#2EFF7B";


bakterien.beginPath();
bakterien.moveTo(100.1, 10);
bakterien.lineTo(2.1, 10);
bakterien.moveTo(4.5, 1);
bakterien.lineTo(4.5, 10);
bakterien.moveTo(7.5, 1);
bakterien.lineTo(10.5, 10);
bakterien.stroke();

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, 200, 100);
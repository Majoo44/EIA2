/*
Aufgabe: Aufgabe 8
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 13.06.2020
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe...
*/
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
crc2.fillStyle = "#FFFF00";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
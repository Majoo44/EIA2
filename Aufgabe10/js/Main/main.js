"use strict";
/*
Aufgabe: Aufgabe 10
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 27.06.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
var L10Inheritance;
(function (L10Inheritance) {
    L10Inheritance.infected = true;
    let cells = [];
    let background;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (!canvas) {
            return;
        }
        L10Inheritance.crc2 = canvas.getContext("2d");
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }
    L10Inheritance.handleLoad = handleLoad;
    function createBackground() {
        let x = 0;
        let y = 0;
        let position = new L10Inheritance.Vector(x, y);
        let pattern = new L10Inheritance.Hintergrund(position);
        pattern.draw(position);
        background = L10Inheritance.crc2.getImageData(0, 0, L10Inheritance.crc2.canvas.width, L10Inheritance.crc2.canvas.height);
    }
    function createCells() {
        let x;
        let y;
        let partikel = 400;
        let zellen = 10;
        let killerzelle = 15;
        let koerperzelle = 50;
        for (let i = 0; i < partikel; i++) {
            x = (Math.random() * L10Inheritance.crc2.canvas.width);
            y = (Math.random() * L10Inheritance.crc2.canvas.height);
            let position = new L10Inheritance.Vector(x, y);
            let particle = new L10Inheritance.Partikel(position);
            particle.draw();
            cells.push(particle);
        }
        for (let i = 0; i < killerzelle; i++) {
            x = (Math.random() * L10Inheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10Inheritance.crc2.canvas.height / 1);
            let position = new L10Inheritance.Vector(x, y);
            let antibody = new L10Inheritance.Killerzelle(position);
            antibody.draw();
            cells.push(antibody);
        }
        for (let i = 0; i < koerperzelle; i++) {
            x = (Math.random() * L10Inheritance.crc2.canvas.width);
            y = (500 + Math.random() * L10Inheritance.crc2.canvas.height / 2);
            let position = new L10Inheritance.Vector(x, y);
            let humancell = new L10Inheritance.Koerperzelle(position);
            humancell.draw();
            cells.push(humancell);
        }
        for (let i = 0; i < zellen; i++) {
            x = (Math.random() * L10Inheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10Inheritance.crc2.canvas.height / 1.5);
            let position = new L10Inheritance.Vector(x, y);
            let killercell = new L10Inheritance.Killerzelle(position);
            killercell.draw();
            cells.push(killercell);
        }
        for (let i = 0; i < zellen; i++) {
            x = (Math.random() * L10Inheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10Inheritance.crc2.canvas.height / 1.5);
            let position = new L10Inheritance.Vector(x, y);
            let corona = new L10Inheritance.Coronazelle(position);
            corona.draw();
            cells.push(corona);
        }
    }
    function animate() {
        L10Inheritance.crc2.putImageData(background, 0, 0);
        for (let zellesuperklasse of cells) {
            if (zellesuperklasse instanceof L10Inheritance.Killerzelle || zellesuperklasse instanceof L10Inheritance.Coronazelle)
                zellesuperklasse.move(1 / 20);
            else if (zellesuperklasse instanceof L10Inheritance.Koerperzelle)
                zellesuperklasse.move(1 / 20);
            else if (zellesuperklasse instanceof L10Inheritance.Partikel)
                zellesuperklasse.move(1 / 80);
            zellesuperklasse.draw();
        }
    }
})(L10Inheritance || (L10Inheritance = {}));
//# sourceMappingURL=main.js.map
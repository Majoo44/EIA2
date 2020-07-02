/*
Aufgabe: Aufgabe 11
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 03.07.2020
Hiermit versichere ich, dass ich diesen Code mit Sebastian&Johannes zusammen auf Grundlage von Codes von Kommilitonen geschrieben habe...
*/
namespace L10Inheritance {

    export let crc2: CanvasRenderingContext2D; 
    export let infected: boolean = true; 
    
    let cells: Zelle [] = []; 
    let background: ImageData;

    window.addEventListener("load", handleLoad);

    export function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas"); 
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight;
        if (!canvas) {
            return; 
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); 
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }

    function createBackground(): void {
        let x: number = 0;
        let y: number = 0;
        let position: Vector = new Vector(x, y);
        let pattern: Hintergrund = new Hintergrund(position);
        pattern.draw(position);
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }



    function createCells(): void {
        let x: number;
        let y: number;
        let partikel: number = 400;
        let zellen: number = 10;
        let killerzelle: number = 15;
        let koerperzelle: number = 50;

        for (let i: number = 0; i < partikel; i++) {

            x = (Math.random() * crc2.canvas.width);
            y = (Math.random() * crc2.canvas.height);

            let position: Vector = new Vector(x, y);
            let particle: Partikel = new Partikel(position);
            particle.draw();
            cells.push(particle);
        }

        for (let i: number = 0; i < killerzelle; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1);

            let position: Vector = new Vector(x, y);
            let antibody: Killerzelle = new Killerzelle(position);
            antibody.draw();
            cells.push(antibody);
        }

        for (let i: number = 0; i < koerperzelle; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (500 + Math.random() * crc2.canvas.height / 2);
            let position: Vector = new Vector(x, y);
            let humancell: Koerperzelle = new Koerperzelle(position);
            humancell.draw();
            cells.push(humancell);
        }

        for (let i: number = 0; i < zellen; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let killercell: Killerzelle = new Killerzelle(position);
            killercell.draw();
            cells.push(killercell);
        }

        for (let i: number = 0; i < zellen; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let corona: Coronazelle = new Coronazelle(position);
            corona.draw();
            cells.push(corona);
        }
    }

    function animate(): void {
        crc2.putImageData(background, 0, 0);
        for (let zellesuperklasse of cells) {
            if (zellesuperklasse instanceof Killerzelle || zellesuperklasse instanceof Coronazelle)
            zellesuperklasse.move(1 / 20); 
            else if (zellesuperklasse instanceof Koerperzelle)
            zellesuperklasse.move(1 / 20); 
            else if (zellesuperklasse instanceof Partikel)
            zellesuperklasse.move (1 / 80 ); 
            zellesuperklasse.draw(); 
        }
    } 
}
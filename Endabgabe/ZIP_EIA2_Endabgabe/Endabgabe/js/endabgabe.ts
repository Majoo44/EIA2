namespace EIA2_Endabgabe {
    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let figures: Form[] = [];
    export let canvasColor: HTMLInputElement;
    export let background: string;
    export let load: HTMLInputElement;

    let backgroundImage: ImageData;
    let canvasWidth: HTMLInputElement;
    let canvasHeight: HTMLInputElement;
    let canvasColorWrap: HTMLElement;
    let forms: HTMLDivElement;
    let formChanges: HTMLDivElement;
    let form: HTMLFormElement;
    let save: HTMLButtonElement;
    let allForms: HTMLDivElement;    

    window.addEventListener("load", handleLoad);
    
    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvasWidth = <HTMLInputElement>document.getElementById("canvasWidth");
        canvasHeight = <HTMLInputElement>document.getElementById("canvasHeight");
        canvasColorWrap = <HTMLDivElement>document.getElementById("canvasColorWrap");
        
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.addEventListener("click", handleClick);

        canvasColor = <HTMLInputElement>document.getElementById("canvasColor");
        canvasColor.addEventListener("change", function (): void {
            createBackground();
        });
        
        save = <HTMLButtonElement>document.getElementById("save");
        save.addEventListener("click", getName);

        form = <HTMLFormElement>document.querySelector("form");
        form.addEventListener("change", handleFormInput);

        forms = <HTMLDivElement>document.getElementById("forms");
        forms.addEventListener("click", createElement);

        load = <HTMLInputElement>document.getElementById("load");
        load.addEventListener("change", loadPicture);

        formChanges = <HTMLDivElement>document.getElementById("formChanges");
        formChanges.addEventListener("click", setAnimation);

        canvasWidth.style.display = "block";
        canvasHeight.style.display = "block";

        canvasHeight.addEventListener("change", setCanvasHeight);
        canvasWidth.addEventListener("change", setCanvasWidth);

        allForms = <HTMLDivElement>document.getElementById("allForms");

        canvas.width = 1050;
        canvas.height = 700;

        findPictures();
        createBackground();
        window.setInterval(animate, 30); 
    }

    let isMusicPlaying: boolean = false;
    function playmusic(): void {
        if (!isMusicPlaying) {
             let music: HTMLAudioElement = new Audio("Konzept/mystic.mp3");
            music.play();
            console.log(music);
            isMusicPlaying = true;
        }
    }
    
    function createElement(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        for (let figure of figures) {
            figure.active = false;
        }
        switch (id) {
            case "triangle":
                let triangle: Triangle = new Triangle();
                triangle.draw();
                figures.push(triangle);
                break;
            case "square":
                let square: Square = new Square();
                square.draw();
                figures.push(square);
                break;
            case "circle":
                let circle: Circle = new Circle();
                circle.draw();
                figures.push(circle);
                break;
            case "star":
                let star: Star = new Star();
                star.draw();
                figures.push(star);
                break;
            default:
                break;
        }
        updateList();
        playmusic();
    }

    export function updateList(): void {
        while (allForms.firstChild) {
            allForms.removeChild(allForms.firstChild);
        }
        let title: HTMLSpanElement = document.createElement("span");
        title.innerText = "All Forms are listed here!";
        allForms.appendChild(title);
        for (let entry of figures) {
            let list: HTMLSpanElement = document.createElement("span");
            list.setAttribute("id", figures.indexOf(entry).toString());
            list.innerText = entry.type + "  color: " + entry.color;
            list.addEventListener("click", setActive);
            allForms.appendChild(list);
        }
    }

    function animate(): void {
        crc2.putImageData(backgroundImage, 0, 0);
        for (let figure of figures) {
            figure.move(0.5);
            figure.draw();
        }
    }

    function setCanvasHeight(): void {
        let newHeight: number = parseInt(canvasHeight.value);
        canvas.height = newHeight;
        createBackground();
    }

    function setCanvasWidth(): void {
        let newWidth: number = parseInt(canvasWidth.value);
        canvas.width = newWidth;
        createBackground();
    }

    export function createBackground(_color?: string): void {
        if (_color) {
            background = _color;
        }
        else
            background = canvasColor.value;
            crc2.fillStyle = background;

        crc2.fillRect(0, 0, canvas.width, canvas.height);
        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
    }
    
    function handleFormInput(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        switch (id) {
            case "formColor":
                let formColor: HTMLInputElement = <HTMLInputElement>document.getElementById("formColor");
                for (let figure of figures) {
                    if (figure.active == true) {
                        figure.changeColor(formColor.value);
                    }
                }
                break;
        }
    }

    function setAnimation(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        for (let figure of figures) {
            if (figure.active == true) {
                switch (id) {
                    case "trash":
                        deleteElement(figure);
                        break;
                    case "rotate":
                        figure.moveType = FORM_MOVE.ROTATE;
                        break;
                    case "move":
                        figure.moveType = FORM_MOVE.MOVE;
                        break;
                    default:
                        break;

                    case "scaleValue":
                        let scaleValue: HTMLInputElement = <HTMLInputElement>document.getElementById("scaleValue");
                        for (let figure of figures) {
                            if (figure.active == true && figure.type != "Heart") {
                                figure.resize(parseFloat(scaleValue.value));
                            }
                    }
                }
            }
        }
    }

    function handleClick(_event: MouseEvent): void {
        let y: number = _event.clientY;
        let x: number = _event.clientX;

        for (let figure of figures) {
            if (figure.active == true) {
                figure.position.x = x;
                figure.position.y = y;
            }
        }
    }

    function deleteElement(_figure: Form): void {
        let index: number = figures.indexOf(_figure);
        figures.splice(index, 1);
        updateList();
    }

    function getName(): void {
        let pictureName = prompt("Please enter a name for your drawing!");
        if (pictureName == null || pictureName == "") {
            alert("Please enter a name");
        }
        else {
            savePicture(pictureName);
            alert("Drawing saved!");
        }
    }

    function setActive(_event: MouseEvent): void {
        for (let entry of figures) {
            entry.active = false;
        }
        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target.id);
        let num: number = parseInt(target.id);
        figures[num].active = true;
    }
}
// Aufgabe: Endabgabe
//Name: Mario Eigeldinger
//Matrikel: 261167
//Datum: 04.08.2020
//Wichtige Info: Der Typescript Code basiert auf dem der Endabgabe von Alida Kohler aus dem aktuellen Kurs. Durch die "Inspirierung" konnte ich einige Dinge verstehen, hinzufügen, entfernen, anders implementieren sowie die Endabgabe final abgeben.

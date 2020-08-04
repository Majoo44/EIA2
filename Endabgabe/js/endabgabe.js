"use strict";
var EIA2_Endabgabe;
(function (EIA2_Endabgabe) {
    EIA2_Endabgabe.figures = [];
    let backgroundImage;
    let canvasWidth;
    let canvasHeight;
    let canvasColorWrap;
    let forms;
    let formChanges;
    let form;
    let save;
    let allForms;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        EIA2_Endabgabe.canvas = document.querySelector("canvas");
        EIA2_Endabgabe.crc2 = EIA2_Endabgabe.canvas.getContext("2d");
        canvasWidth = document.getElementById("canvasWidth");
        canvasHeight = document.getElementById("canvasHeight");
        canvasColorWrap = document.getElementById("canvasColorWrap");
        EIA2_Endabgabe.canvas = document.querySelector("canvas");
        EIA2_Endabgabe.canvas.addEventListener("click", handleClick);
        EIA2_Endabgabe.canvasColor = document.getElementById("canvasColor");
        EIA2_Endabgabe.canvasColor.addEventListener("change", function () {
            createBackground();
        });
        save = document.getElementById("save");
        save.addEventListener("click", getName);
        form = document.querySelector("form");
        form.addEventListener("change", handleFormInput);
        forms = document.getElementById("forms");
        forms.addEventListener("click", createElement);
        EIA2_Endabgabe.load = document.getElementById("load");
        EIA2_Endabgabe.load.addEventListener("change", EIA2_Endabgabe.loadPicture);
        formChanges = document.getElementById("formChanges");
        formChanges.addEventListener("click", setAnimation);
        canvasWidth.style.display = "block";
        canvasHeight.style.display = "block";
        canvasHeight.addEventListener("change", setCanvasHeight);
        canvasWidth.addEventListener("change", setCanvasWidth);
        allForms = document.getElementById("allForms");
        EIA2_Endabgabe.canvas.width = 1050;
        EIA2_Endabgabe.canvas.height = 700;
        EIA2_Endabgabe.findPictures();
        createBackground();
        window.setInterval(animate, 30);
    }
    let isMusicPlaying = false;
    function playmusic() {
        if (!isMusicPlaying) {
            let music = new Audio("Konzept/mystic.mp3");
            music.play();
            console.log(music);
            isMusicPlaying = true;
        }
    }
    function createElement(_event) {
        let target = _event.target;
        let id = target.id;
        for (let figure of EIA2_Endabgabe.figures) {
            figure.active = false;
        }
        switch (id) {
            case "triangle":
                let triangle = new EIA2_Endabgabe.Triangle();
                triangle.draw();
                EIA2_Endabgabe.figures.push(triangle);
                break;
            case "square":
                let square = new EIA2_Endabgabe.Square();
                square.draw();
                EIA2_Endabgabe.figures.push(square);
                break;
            case "circle":
                let circle = new EIA2_Endabgabe.Circle();
                circle.draw();
                EIA2_Endabgabe.figures.push(circle);
                break;
            case "star":
                let star = new EIA2_Endabgabe.Star();
                star.draw();
                EIA2_Endabgabe.figures.push(star);
                break;
            default:
                break;
        }
        updateList();
        playmusic();
    }
    function updateList() {
        while (allForms.firstChild) {
            allForms.removeChild(allForms.firstChild);
        }
        let title = document.createElement("span");
        title.innerText = "All Forms are listed here!";
        allForms.appendChild(title);
        for (let entry of EIA2_Endabgabe.figures) {
            let list = document.createElement("span");
            list.setAttribute("id", EIA2_Endabgabe.figures.indexOf(entry).toString());
            list.innerText = entry.type + "  color: " + entry.color;
            list.addEventListener("click", setActive);
            allForms.appendChild(list);
        }
    }
    EIA2_Endabgabe.updateList = updateList;
    function animate() {
        EIA2_Endabgabe.crc2.putImageData(backgroundImage, 0, 0);
        for (let figure of EIA2_Endabgabe.figures) {
            figure.move(0.5);
            figure.draw();
        }
    }
    function setCanvasHeight() {
        let newHeight = parseInt(canvasHeight.value);
        EIA2_Endabgabe.canvas.height = newHeight;
        createBackground();
    }
    function setCanvasWidth() {
        let newWidth = parseInt(canvasWidth.value);
        EIA2_Endabgabe.canvas.width = newWidth;
        createBackground();
    }
    function createBackground(_color) {
        if (_color) {
            EIA2_Endabgabe.background = _color;
        }
        else
            EIA2_Endabgabe.background = EIA2_Endabgabe.canvasColor.value;
        EIA2_Endabgabe.crc2.fillStyle = EIA2_Endabgabe.background;
        EIA2_Endabgabe.crc2.fillRect(0, 0, EIA2_Endabgabe.canvas.width, EIA2_Endabgabe.canvas.height);
        backgroundImage = EIA2_Endabgabe.crc2.getImageData(0, 0, EIA2_Endabgabe.canvas.width, EIA2_Endabgabe.canvas.height);
    }
    EIA2_Endabgabe.createBackground = createBackground;
    function handleFormInput(_event) {
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "formColor":
                let formColor = document.getElementById("formColor");
                for (let figure of EIA2_Endabgabe.figures) {
                    if (figure.active == true) {
                        figure.changeColor(formColor.value);
                    }
                }
                break;
        }
    }
    function setAnimation(_event) {
        let target = _event.target;
        let id = target.id;
        for (let figure of EIA2_Endabgabe.figures) {
            if (figure.active == true) {
                switch (id) {
                    case "trash":
                        deleteElement(figure);
                        break;
                    case "rotate":
                        figure.moveType = EIA2_Endabgabe.FORM_MOVE.ROTATE;
                        break;
                    case "move":
                        figure.moveType = EIA2_Endabgabe.FORM_MOVE.MOVE;
                        break;
                    default:
                        break;
                    case "scaleValue":
                        let scaleValue = document.getElementById("scaleValue");
                        for (let figure of EIA2_Endabgabe.figures) {
                            if (figure.active == true && figure.type != "Heart") {
                                figure.resize(parseFloat(scaleValue.value));
                            }
                        }
                }
            }
        }
    }
    function handleClick(_event) {
        let y = _event.clientY;
        let x = _event.clientX;
        for (let figure of EIA2_Endabgabe.figures) {
            if (figure.active == true) {
                figure.position.x = x;
                figure.position.y = y;
            }
        }
    }
    function deleteElement(_figure) {
        let index = EIA2_Endabgabe.figures.indexOf(_figure);
        EIA2_Endabgabe.figures.splice(index, 1);
        updateList();
    }
    function getName() {
        let pictureName = prompt("Please enter a name for your drawing!");
        if (pictureName == null || pictureName == "") {
            alert("Please enter a name");
        }
        else {
            EIA2_Endabgabe.savePicture(pictureName);
            alert("Drawing saved!");
        }
    }
    function setActive(_event) {
        for (let entry of EIA2_Endabgabe.figures) {
            entry.active = false;
        }
        let target = _event.target;
        console.log(target.id);
        let num = parseInt(target.id);
        EIA2_Endabgabe.figures[num].active = true;
    }
})(EIA2_Endabgabe || (EIA2_Endabgabe = {}));
// Aufgabe: Endabgabe
//Name: Mario Eigeldinger
//Matrikel: 261167
//Datum: 04.08.2020
//Wichtige Info: Der Typescript Code basiert auf dem der Endabgabe von Alida Kohler aus dem aktuellen Kurs. Durch die "Inspirierung" konnte ich einige Dinge verstehen, hinzufügen, entfernen, anders implementieren sowie die Endabgabe final abgeben.
//# sourceMappingURL=endabgabe.js.map
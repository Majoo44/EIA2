"use strict";
var EIA2_Endabgabe;
(function (EIA2_Endabgabe) {
    let url = "https://knobelkind.herokuapp.com/";
    //let url: string = "http://localhost:5001/";
    let options;
    function savePicture(_name) {
        if (options) {
            checkNames(_name);
        }
        if (true) {
            insertPicture(_name);
        }
    }
    EIA2_Endabgabe.savePicture = savePicture;
    function checkNames(_name) {
        for (let i = 0; i < options.length; i++) {
            if (options[i] == _name) {
                alert("This name is already taken! Please choose another one!");
                return false;
            }
        }
        return true;
    }
    function insertPicture(_name) {
        let information = [];
        information.push();
        for (let figure of EIA2_Endabgabe.figures) {
            let form = {
                "active": figure.active,
                "size": figure.size,
                "positionX": Math.floor(figure.position.x),
                "positionY": Math.floor(figure.position.y),
                "rotation": figure.rotation,
                "moveType": figure.moveType,
                "color": figure.color,
                "type": figure.type
            };
            information.push(form);
        }
        sendData(information, _name);
    }
    async function findPictures() {
        console.log("findPictures");
        let response = await fetch(url + "?" + "action=getAllPictures");
        let responseText = await response.text();
        let data = JSON.parse(responseText);
        createDatalist(data);
    }
    EIA2_Endabgabe.findPictures = findPictures;
    async function sendData(_information, _name) {
        console.log("sendData");
        let name = _name.replace(" ", "_");
        let width = Math.floor(EIA2_Endabgabe.canvas.width);
        let height = Math.floor(EIA2_Endabgabe.canvas.height);
        let data = {
            name: name,
            info: {
                background: EIA2_Endabgabe.background,
                width: width,
                height: height
            },
            parts: _information
        };
        let query = encodeURIComponent(JSON.stringify(data));
        let response = await fetch(url + "?action=savePicture&data=" + query);
        let responseText = await response.text();
        if (responseText != "") {
            alert("Your picture " + _name + " has been saved!");
        }
        else {
            alert("An error has occurred during saving");
        }
        findPictures();
    }
    function createDatalist(elements) {
        console.log("createDatalist");
        let drawings = document.getElementById("drawings");
        if (drawings != null) {
            while (drawings.firstChild) {
                drawings.removeChild(drawings.firstChild);
            }
        }
        for (let i = 0; i < elements.length; i++) {
            let entry = elements[i];
            if (entry.name != "") {
                let option = document.createElement("option");
                option.setAttribute("name", entry.name);
                option.value = entry.name;
                drawings.appendChild(option);
            }
        }
    }
    async function loadPicture() {
        EIA2_Endabgabe.figures = [];
        let name = document.getElementById("load").value;
        name = encodeURIComponent(JSON.stringify(name));
        let response = await fetch(url + "?" + "action=getPicture&name=" + name);
        let responseText = await response.text();
        let data = JSON.parse(responseText);
        console.log(data);
        EIA2_Endabgabe.canvas.width = data.info.width;
        EIA2_Endabgabe.canvas.height = data.info.height;
        EIA2_Endabgabe.createBackground(data.info.background);
        let info = [];
        for (let i = 0; i < data.parts.length; i++) {
            let picturePart = data.parts[i];
            switch (picturePart.type) {
                case ("Triangle"):
                    let triangle = new EIA2_Endabgabe.Triangle(picturePart);
                    triangle.draw();
                    info = [];
                    EIA2_Endabgabe.figures.push(triangle);
                    break;
                case ("Circle"):
                    let circle = new EIA2_Endabgabe.Circle(picturePart);
                    circle.draw();
                    info = [];
                    EIA2_Endabgabe.figures.push(circle);
                    break;
                case ("Square"):
                    let square = new EIA2_Endabgabe.Square(picturePart);
                    square.draw();
                    info = [];
                    EIA2_Endabgabe.figures.push(square);
                    break;
                case ("Star"):
                    let star = new EIA2_Endabgabe.Star(picturePart);
                    star.draw();
                    info = [];
                    EIA2_Endabgabe.figures.push(star);
                    break;
                default:
                    // info.push(data[i]);
                    break;
            }
        }
        EIA2_Endabgabe.updateList();
    }
    EIA2_Endabgabe.loadPicture = loadPicture;
})(EIA2_Endabgabe || (EIA2_Endabgabe = {}));
//# sourceMappingURL=connectserver.js.map
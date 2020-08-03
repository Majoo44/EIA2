namespace EIA2_Endabgabe {
    let url: string = "http://localhost:5001/";
    // let url: string = "https://knobelkind.herokuapp.com/";
    let options: string[];

    export interface PicturePart {
        active: boolean;
        size: Vector;
        positionX: number;
        positionY: number;
        rotation: number;
        moveType: FORM_MOVE;
        color: string;
        type: string;
    }

    export interface PictureInfo {
        width: number;
        height: number;
        background: string;
    }

    export interface Picture {
        name: string;
        info: PictureInfo;
        parts: PicturePart[];
    }

    export function savePicture(_name: string): void {
        if (options) {
            checkNames(_name);
        }
        if (true) {
            insertPicture(_name);
        }
    }

    function checkNames(_name: string): boolean {
        for (let i: number = 0; i < options.length; i++) {
            if (options[i] == _name) {
                alert("This name is already taken! Please choose another one!");
                return false;
            }
        } 
        return true;
    }

    function insertPicture(_name: string): void {
        let information: PicturePart[] = [];
        information.push();
        for (let figure of figures) {
            let form: PicturePart = {
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

    export async function findPictures(): Promise<void> {
        console.log("findPictures");
        let response: Response = await fetch(url + "?" + "action=getAllPictures");
        let responseText: string = await response.text();
        let data: Picture[] = JSON.parse(responseText);
        createDatalist(data);
    }

    async function sendData(_information: PicturePart[], _name: string): Promise<void> {
        console.log("sendData");

        let name: string = _name.replace(" ", "_");

        let width: number = Math.floor(canvas.width);
        let height: number = Math.floor(canvas.height);

        let data: Picture = {
            name: name,
            info: {
                background: background,
                width: width,
                height: height
            },
            parts: _information
        };

        let query: string = encodeURIComponent(JSON.stringify(data));

        let response: Response = await fetch(url + "?action=savePicture&data=" + query);

        let responseText: string = await response.text();
        if (responseText != "") {
            alert("Your picture " + _name + " has been saved!");
        }
        else {
            alert("An error has occurred during saving");
        }
        findPictures();
    }

    function createDatalist(elements: Picture[]): void {
        console.log("createDatalist");
        let drawings: HTMLDataListElement = <HTMLDataListElement>document.getElementById("drawings");
        
 
        if (drawings != null) {
                while (drawings.firstChild) {
                    drawings.removeChild(drawings.firstChild);
            }
        }

        for (let i: number = 0; i < elements.length; i++) {
            let entry: Picture = elements[i];
            if (entry.name != "") {
                let option: HTMLOptionElement = document.createElement("option");
                option.setAttribute("name", entry.name);
                option.value = entry.name;
                drawings.appendChild(option);
            }
        }
    }

    export async function loadPicture(): Promise<void> {
        figures = [];
        let name: string = (<HTMLInputElement>document.getElementById("load")).value;
        name = encodeURIComponent( JSON.stringify(name));
        let response: Response = await fetch(url + "?" + "action=getPicture&name=" + name);
        let responseText: string = await response.text();
        
        let data: Picture = JSON.parse(responseText);

        console.log(data);
        canvas.width = data.info.width; 
        canvas.height = data.info.height;
        createBackground(data.info.background);
      
        let info: string[] = [];
        for (let i: number = 0; i < data.parts.length; i++) {
            let picturePart: PicturePart = data.parts[i];
            switch (picturePart.type) {
                case ("Triangle"):
                    let triangle: Triangle = new Triangle(picturePart);
                    triangle.draw();
                    info = [];
                    figures.push(triangle);
                    break;
                case ("Circle"):
                    let circle: Circle = new Circle(picturePart);
                    circle.draw();
                    info = [];
                    figures.push(circle);
                    break;
                case ("Square"):
                    let square: Square = new Square(picturePart);
                    square.draw();
                    info = [];
                    figures.push(square);
                    break;
                case ("Star"):
                    let star: Star = new Star(picturePart);
                    star.draw();
                    info = [];
                    figures.push(star);
                    break;
                default:
                    // info.push(data[i]);
                    break;
            }
        }
        updateList();
    }
}
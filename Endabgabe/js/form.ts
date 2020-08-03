namespace EIA2_Endabgabe {
    export enum FORM_MOVE {
        ROTATE = "rotate",
        MOVE = "move"
    }
    export abstract class Form {
        public color: string;
        public size: Vector;
        public position: Vector;
        public rotation: number;
        public moveType: FORM_MOVE;
        public active: boolean;
        public velocity: Vector = new Vector(25, 25);
        public type: string;

        public constructor(_info?: string[]) {
            console.log(_info);
            if (_info) {
                if (_info[0] == "true") {
                    this.active = true;
                    console.log("This is true");
                }
                else
                this.active = false;
                this.size = new Vector(parseInt(_info[1]), parseInt(_info[2]));
                this.position = new Vector(parseInt(_info[3]), parseInt(_info[4]));
                console.log(this.position);
                if (_info[6] == "move")
                    this.moveType = FORM_MOVE.MOVE;
                else
                    this.moveType = FORM_MOVE.ROTATE;
                this.color = _info[7];
                }
            else {
                this.color = "#ffffff";
                this.size = new Vector(60, 40);
                this.position = new Vector(80, 50);
                this.rotation = 0;
                this.active = true;
                this.moveType = FORM_MOVE.MOVE;
            }
        }

        abstract draw(): void;

        public move(_rotateValue: number): void {
            switch (this.moveType) {
                case FORM_MOVE.MOVE:
                    let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                    offset.scale(2 / 50);
                    this.position.add(offset);
                    break;
                case FORM_MOVE.ROTATE:
                    this.rotation += _rotateValue;
                    break;
                default:
                    break;
            }
        }

        public changeColor(_newColor: string): void {
            this.color = _newColor;
        }

        public resize(_factor: number): void {
            this.size.scale(_factor);
        }

        public changePosition(_x: number, _y: number): void {
            this.position.x = _x;
            this.position.y = _y;
        }
    }
}
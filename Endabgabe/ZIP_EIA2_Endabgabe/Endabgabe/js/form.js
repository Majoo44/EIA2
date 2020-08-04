"use strict";
var EIA2_Endabgabe;
(function (EIA2_Endabgabe) {
    let FORM_MOVE;
    (function (FORM_MOVE) {
        FORM_MOVE["ROTATE"] = "rotate";
        FORM_MOVE["MOVE"] = "move";
    })(FORM_MOVE = EIA2_Endabgabe.FORM_MOVE || (EIA2_Endabgabe.FORM_MOVE = {}));
    class Form {
        constructor(_info) {
            this.velocity = new EIA2_Endabgabe.Vector(25, 25);
            console.log(_info);
            if (_info) {
                if (_info.active) {
                    this.active = true;
                    console.log("This is true");
                }
                else {
                    this.active = false;
                }
                this.size = new EIA2_Endabgabe.Vector(_info.size.x, _info.size.y);
                this.position = new EIA2_Endabgabe.Vector(_info.positionX, _info.positionY);
                console.log(this.position);
                if (_info.moveType == "move") {
                    this.moveType = FORM_MOVE.MOVE;
                }
                else {
                    this.moveType = FORM_MOVE.ROTATE;
                }
                this.color = _info.color;
            }
            else {
                this.color = "#ffffff";
                this.size = new EIA2_Endabgabe.Vector(60, 40);
                this.position = new EIA2_Endabgabe.Vector(80, 50);
                this.rotation = 0;
                this.active = true;
                this.moveType = FORM_MOVE.MOVE;
            }
        }
        move(_rotateValue) {
            switch (this.moveType) {
                case FORM_MOVE.MOVE:
                    let offset = new EIA2_Endabgabe.Vector(this.velocity.x, this.velocity.y);
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
        changeColor(_newColor) {
            this.color = _newColor;
        }
        resize(_factor) {
            this.size.scale(_factor);
        }
        changePosition(_x, _y) {
            this.position.x = _x;
            this.position.y = _y;
        }
    }
    EIA2_Endabgabe.Form = Form;
})(EIA2_Endabgabe || (EIA2_Endabgabe = {}));
//# sourceMappingURL=form.js.map
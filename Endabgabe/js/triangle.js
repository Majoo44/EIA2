"use strict";
var EIA2_Endabgabe;
(function (EIA2_Endabgabe) {
    class Triangle extends EIA2_Endabgabe.Form {
        constructor(_info) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Triangle";
        }
        draw() {
            EIA2_Endabgabe.crc2.beginPath();
            EIA2_Endabgabe.crc2.save();
            EIA2_Endabgabe.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe.crc2.rotate(this.rotation * Math.PI / 180);
            EIA2_Endabgabe.crc2.moveTo(0 - this.size.x / 2, 0 + this.size.y / 2);
            EIA2_Endabgabe.crc2.lineTo(0 + this.size.x / 2, 0 + this.size.y / 2);
            EIA2_Endabgabe.crc2.lineTo(0, 0 - this.size.y / 2);
            EIA2_Endabgabe.crc2.lineTo(0 - this.size.x / 2, 0 + this.size.y / 2);
            EIA2_Endabgabe.crc2.lineJoin = "round";
            if (this.active == true) {
                EIA2_Endabgabe.crc2.strokeStyle = "black";
                EIA2_Endabgabe.crc2.lineWidth = 7;
                EIA2_Endabgabe.crc2.fill();
                EIA2_Endabgabe.crc2.stroke();
            }
            else {
                EIA2_Endabgabe.crc2.strokeStyle = this.color;
                EIA2_Endabgabe.crc2.fillStyle = this.color;
                EIA2_Endabgabe.crc2.fill();
            }
            EIA2_Endabgabe.crc2.fillStyle = this.color;
            EIA2_Endabgabe.crc2.fill();
            EIA2_Endabgabe.crc2.restore();
            EIA2_Endabgabe.crc2.closePath();
        }
        changeColor(_newColor) {
            super.changeColor(_newColor);
        }
        changePosition(_x, _y) {
            super.changePosition(_x, _y);
        }
        // public changeRotation(_factor: number) {
        //     super.changeRotation(_factor);
        // }
        resize(_factor) {
            super.resize(_factor);
        }
        move() {
            super.move(1);
            if (this.position.x < 0)
                this.position.x += EIA2_Endabgabe.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += EIA2_Endabgabe.crc2.canvas.height;
            if (this.position.x > EIA2_Endabgabe.crc2.canvas.width)
                this.position.x -= EIA2_Endabgabe.crc2.canvas.width;
            if (this.position.y > EIA2_Endabgabe.crc2.canvas.height)
                this.position.y -= EIA2_Endabgabe.crc2.canvas.height;
        }
    }
    EIA2_Endabgabe.Triangle = Triangle;
})(EIA2_Endabgabe || (EIA2_Endabgabe = {}));
//# sourceMappingURL=triangle.js.map
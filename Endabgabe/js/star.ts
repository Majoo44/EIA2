namespace EIA2_Endabgabe {
    export class Star extends Form {

        constructor(_info?: PicturePart) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Star";
        }

        public draw(): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation * Math.PI / 180); 
            crc2.moveTo(0, 0 - this.size.x/2);
            for (let i = 0; i < 5; i++) {
                crc2.rotate(Math.PI / 5);
                crc2.lineTo(0, 0 - (this.size.x/2 * this.size.x/20));
                crc2.rotate(Math.PI / 5);
                crc2.lineTo(0, 0 - this.size.x/2);
            }
            if (this.active == true) {
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();
            }
            else {
                crc2.strokeStyle = this.color;
                crc2.fillStyle = this.color;
                crc2.lineWidth = 7;
                crc2.fill();
            }
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }

        public changeColor(_newColor: string): void {
            super.changeColor(_newColor);
        }

        public changePosition(_x: number, _y: number) {
            super.changePosition(_x, _y);
        }

        // public changeRotation(_factor: number) {
        //     super.changeRotation(_factor);
        // }

        public resize(_factor: number) {
            super.resize(_factor);
        }

        public move(): void {
            super.move(1);
            if (this.position.x < this.size.x)
                this.position.x += crc2.canvas.width;
            if (this.position.y < this.size.y)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width - this.size.x)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height - this.size.y)
                this.position.y -= crc2.canvas.height;
        }
    }
}
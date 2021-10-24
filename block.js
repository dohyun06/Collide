export class Block {
    constructor(stageWidth, stageHeight, radius) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.diameter = radius * 2;
        this.width = 400;
        this.height = 200;
        this.x = this.stageWidth / 2 - this.width;
        this.y = this.stageHeight / 2 - this.width;
        this.maxX = this.width + this.x;
        this.maxY = this.height + this.y;

        document.addEventListener('mousemove', this.mouseMove.bind(this), false);
    }

    mouseMove(e) {
        this.x = e.clientX - this.width / 2;
        this.y = e.clientY - this.height / 2;

        if (this.x < this.diameter) {
            this.x = this.diameter;
        }

        if (this.x > this.stageWidth - this.diameter - this.width) {
            this.x = this.stageWidth - this.diameter - this.width;
        }

        if (this.y < this.diameter) {
            this.y = this.diameter;
        }

        if (this.y > this.stageHeight - this.diameter - this.height) {
            this.y = this.stageHeight - this.diameter - this.height;
        }
    }

    draw(ctx) {
        this.maxX = this.width + this.x;
        this.maxY = this.height + this.y;

        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}

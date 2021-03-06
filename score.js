class Score {
    constructor() {
        this.length = 0;
        this.height = 0;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.font = '25px Arial';
        ctx.strokeText("LENGTH: " + Math.floor(this.length), 50, 50);
        ctx.fillText("LENGTH: " + Math.floor(this.length), 50, 50);
        ctx.strokeText("HEIGHT: " + Math.floor(this.height), 50, 85);
        ctx.fillText("HEIGHT: " + Math.floor(this.height), 50, 85);
        ctx.strokeText("MONEY: $" + Math.floor(money), 50, 120);
        ctx.fillText("MONEY: $" + Math.floor(money), 50, 120);
        ctx.strokeText("MAX LENGTH: " + Math.floor(maxLength), 925, 50);
        ctx.fillText("MAX LENGTH: " + Math.floor(maxLength), 925, 50);
        ctx.strokeText("MAX HEIGHT: " + Math.floor(maxHeight), 925, 85);
        ctx.fillText("MAX HEIGHT: " + Math.floor(maxHeight), 925, 85);
        
        for (let i = 0; i < flushes; i++) {
            let shift = 50*i;
            ctx.drawImage(flushSprite, 1115, 300 + shift, 54, 32);
        }
    }
    update (length, height) {
        this.length += length;
        this.height = -height + 705.1;
        money += 0.5*length;
    }
    updateMax() {
        if (this.length > maxLength) {
            maxLength = this.length;
        }
        if (this.height > maxHeight) {
            maxHeight = this.height;
        }
    }
}

let score = new Score();
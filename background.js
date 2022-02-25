const background = new Image();
background.src = './images/BG.png'; //Buildings was Designed by Freepik

class Background {
    constructor() {
        this.x = 0;
        this.x1 = canvas.width + 500;
        this.y = -2200;
        this.width = canvas.width + 500;
        this.height = canvas.height + 2200;
    }
    draw() {
        if (this.x <= -this.width) {
            this.x = this.width + this.x1;
        } 
        if (this.x1 <= -this.width) {
            this.x1 = this.width + this.x;
        } 
        ctx.drawImage(background, BG.x, BG.y, BG.width, BG.height);
        ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height); 
    }
    move() {
        //Apply friction to X axis
        Xdiff = Xdiff - (Xdiff*friction);
        this.x -= Xdiff; 
        this.x1 -= Xdiff; 
    }
    moveY() {
        this.y -= Ydiff; 
    }
}

BG = new Background();
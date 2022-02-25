const pipesSprite = new Image();
pipesSprite.src = './images/pipes.png'; //Parts was designed by macrovector / Freepik

const cannonTop = new Image();
cannonTop.src="./images/cannon.png";

class Cannon {
    constructor() {
        this.x = 300;
        this.y = 580;
        this.topX = this.x-115;
        this.topY = this.y-170;
        this.pipesWidth = 238;
        this.pipesHeight = 652;
        this.cannonWidth = 75;
        this.cannonHeight = 63;
    }

    pipes() {
        ctx.drawImage(pipesSprite, this.x-280, this.y-430, this.pipesWidth, this.pipesHeight);
    }

    rotateTop() {
        if (mousePos) {
            angle = Math.atan2(mousePos.y - (this.y-145), mousePos.x - (this.x-80));
            ctx.translate((this.x-80), (this.y-145));
            ctx.rotate(angle);
            ctx.translate(-(this.x-84), -(this.y-138));
        }
    }

    draw() {
        this.pipes();
        ctx.save();
        
        this.rotateTop();
        if (!playerShooted) {
            player = new Player(this.topX+120, this.topY);
            player.draw();
        }
        
        ctx.drawImage(cannonTop, this.topX,this.topY, this.cannonWidth, this.cannonHeight);
    }

    move() { 
        this.x -= Xdiff; 
        this.topX -= Xdiff;
    }

    moveY() {
        this.y -= Ydiff;
        this.topY -= Ydiff; 
    }
}

let cannon = new Cannon();


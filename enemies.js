const flySprite = new Image();
flySprite.src = './images/fly.png'

const hitSprite = new Image();
hitSprite.src = './images/hit-effect.png'

class Fly {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 62;
        this.height = 37;
    }
    move() {
        this.x -= Xdiff;
        if (player.tempY < (canvas.height/2 + (canvas.height/2 - player.y))) {
            this.y -= Ydiff;
        }
        
    }
    draw() {
        ctx.drawImage(flySprite, this.x, this.y, this.width, this.height); 
    }
    hitted() {
        let dx = this.x - player.x;
        let dy = this.y - player.y + 25;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.width/2 + player.width/2) {
            return true;
        } 
    }
    die() {
        this.x = -500;
        Xdiff /= 1.5;  
    }
    drawHitEffect(x, y) {
        ctx.drawImage(hitSprite, x-100, y-100, 300, 300);
    }
}

let fly = new Fly(1200,350);
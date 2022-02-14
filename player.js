const playerSprite = new Image();
playerSprite.src = './images/player.png'

class Player {
    constructor() {
        this.radius = 75;
        this.mass = this.radius;
        this.originalWidth = 1690;
        this.originalHeight = 2090;
        this.width = this.originalWidth/13;
        this.height = this.originalHeight/13;
        
        this.x = 310;
        this.y = 410;
        this.tempY = this.y;
    }

    move() {  
        //Sort out gravity
        if(this.y + this.radius < 780){
            Ydiff += gravity;
        } 
        this.y += Ydiff;
        this.tempY = this.y; 
    }

    updatePosition(){
        Ydiff += gravity;
        this.tempY += Ydiff; 
    }

    draw() {
        ctx.fillStyle = "black";
        ctx.drawImage(playerSprite,0,0, this.originalWidth, this.originalHeight, this.x-60, this.y-80, this.width, this.height);   
    }

    rotate(degrees){
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(degrees*Math.PI/180)
        ctx.drawImage(playerSprite, (this.width/2 *(-1)), (this.height/2 *(-1))-80, this.width, this.height);
        ctx.restore();
    }

    clicked(xmouse, ymouse) {
        const distance = Math.sqrt(((xmouse - this.x-50)**2) + ((ymouse - this.y)**2));
        if(distance < this.radius){
            Xdiff = Math.cos(0.785) * 10;
            Ydiff = Math.sin(-0.785) * 7;
        }
    }
}
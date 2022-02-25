const playerSprite = new Image();
playerSprite.src = './images/player.png'

const flushSprite = new Image();
flushSprite.src = './images/flush.png'

const kofolaFlowSprite = new Image();
kofolaFlowSprite.src = './images/kofola-flow.png';

const fireSprite = new Image();
fireSprite.src = './images/fire.png';

class Player {
    constructor() {
        this.radius = 75;
        this.mass = this.radius;
        this.width = 130;
        this.height = 161;
        
        this.x = 310;
        this.y = 410;
        this.tempY = this.y;
    }

    move() {  
        if(this.y + this.radius < 780) {
            Ydiff += gravity;
        } 
        this.y += Ydiff;
        this.tempY = this.y; 
    }

    moveUp() {
        if(this.y + this.radius < 780) {
            Ydiff += gravity;
        } 
        this.y += Ydiff;
    }

    updatePosition(){
        Ydiff += gravity;
        this.tempY += Ydiff; 
    }

    draw() {
        ctx.fillStyle = "black";
        ctx.drawImage(playerSprite, this.x-67, this.y-105, this.width, this.height);
        
        if (mPacketBought) {
            ctx.drawImage(mPacketSprite, this.x-22, this.y+10, 29, 11);   
        } 
        
        if (spoilerBought) {
            ctx.drawImage(spoilerSprite, this.x-77, this.y-97, 32, 36);   
        }

        if (wheelsBought) {
            ctx.drawImage(wheelsSprite, this.x-52, this.y+40, 20, 20);
            ctx.drawImage(wheelsSprite, this.x+13, this.y+40, 20, 20);      
        }

        if (sportWheelsBought) {
            ctx.drawImage(sportWheelsSprite, this.x-52, this.y+27, 40, 40);
            ctx.drawImage(sportWheelsSprite, this.x+7, this.y+27, 40, 40);      
        }

        if (suitBought) {
            ctx.drawImage(suitSprite, this.x-33, this.y-59, 99, 75);   
        }

        if (helmetBought) {
            ctx.drawImage(helmetSprite, this.x-26, this.y-107, 65, 65);   
        }
    }

    rotate(degrees) {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(degrees*Math.PI/180)
        
        if (kofolaBoosted) {
            ctx.drawImage(kofolaSprite, (this.width/2 *(-1))-50, (this.height/2 *(-1))-20, 65, 45);
            ctx.drawImage(kofolaFlowSprite, (this.width/2 *(-1))-94, (this.height/2 *(-1))+12, 49, 22);
        }

        if (nitroBoosted) {
            ctx.drawImage(nitroSprite, (this.width/2 *(-1))-60, (this.height/2 *(-1))-20, 74, 34);
            ctx.drawImage(fireSprite, (this.width/2 *(-1))-120, (this.height/2 *(-1))+3, 60, 31);
        }
        
        ctx.drawImage(playerSprite, (this.width/2 *(-1)), (this.height/2 *(-1))-80, this.width, this.height);
        
        if (flushed) {
            ctx.drawImage(flushSprite, (this.width/2 *(-1))-38, (this.height/2 *(-1))+54, 54, 32);
        }

        if (mPacketBought) {
            ctx.drawImage(mPacketSprite, (this.width/2 *(-1))+45, (this.height/2 *(-1))+35, 29, 11);
        }

        if (spoilerBought) {
            ctx.drawImage(spoilerSprite, (this.width/2 *(-1))-10, (this.height/2 *(-1))-72, 32, 36);
        }

        if (wheelsBought) {
            ctx.drawImage(wheelsSprite, (this.width/2 *(-1))+15, (this.height/2 *(-1))+65, 20, 20);
            ctx.drawImage(wheelsSprite, (this.width/2 *(-1))+80, (this.height/2 *(-1))+65, 20, 20);
        }

        if (sportWheelsBought) {
            ctx.drawImage(sportWheelsSprite, (this.width/2 *(-1))+15, (this.height/2 *(-1))+52, 40, 40);
            ctx.drawImage(sportWheelsSprite, (this.width/2 *(-1))+70, (this.height/2 *(-1))+52, 40, 40);
        }

        if (suitBought) {
            ctx.drawImage(suitSprite, (this.width/2 *(-1))+34, (this.height/2 *(-1))-34, 99, 75);
        }

        if (helmetBought) {
            ctx.drawImage(helmetSprite, (this.width/2 *(-1))+40, (this.height/2 *(-1))-82, 65, 65);
        }

        ctx.restore();
    }

    clicked(xmouse, ymouse) {
        const distance = Math.sqrt(((xmouse - this.x-50)**2) + ((ymouse - this.y)**2));
        if(distance < this.radius){
            Xdiff += Math.cos(0.785) * 10;
            Ydiff = Math.sin(-0.785) * 7;
            flushed = true;
            flushes--;
        }
    }
}
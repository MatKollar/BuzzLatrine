const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 800;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    BG.draw();
    cannon.draw();
    ctx.restore();
    
    if (playerShooted) {
        score.update(Xdiff, player.tempY);
        score.updateMax();
        score.draw();
        drawPlayer();
        drawArrow();
        BG.move();
        cannon.move();
        handleHeightDiff();
        playerHitGround(player);
    }
    if (Xdiff < 0.2 && Xdiff != null) {  //when player stops, call menu
        menu();
    }
}

function drawPlayer() {
    if (Ydiff < -0.2 && player.tempY < 500) {
        player.rotate(-15);
    }
    else if (Ydiff > 0.2 && player.tempY < 600) {
        player.rotate(15);
    }
    else if (Ydiff > -0.2 && Ydiff < -0.1 && player.tempY < 500) {
        player.rotate(-8);
    }
    else if (Ydiff < 0.2 && Ydiff > 0.1 && player.tempY < 600) {
        player.rotate(8);
    }
    else {
        player.rotate(0);
    }
}

function drawArrow(){
    const arrowUp = new Image();
    arrowUp.src="./images/arrow-up.png";

    const arrowDown = new Image();
    arrowDown.src="./images/arrow-down.png";
    
    arrowWidth = 720/16;
    arrowHeight = 865/16;

    if (Ydiff < 0 && player.tempY < -2100 ) {
        ctx.drawImage(arrowUp, 800, 35, arrowWidth, arrowHeight);
    }
    else if (Ydiff > 0  && player.tempY < -2100) {
        ctx.drawImage(arrowDown, 800, 35, arrowWidth, arrowHeight);
    }
}

function handleHeightDiff() {
    if (player.tempY > (canvas.height/2 + (canvas.height/2 - player.y))) {
        player.move();
        BG.y = -2200;
    }
    else{
        if (-player.tempY <= (BG.height - 1300)) {
            player.updatePosition();
            BG.moveY();
        }
        else {
            player.moveUp();
            player.updatePosition();
        }
        cannon.moveY();
    }
}

function playerHitGround(player) {
    //A collision has occured on bottom side of the canvas
    if (player.y + player.radius > 780) {
        //Sort out elasticity & then change direction
        Ydiff = (Ydiff * elasticity);
        if (player.y + player.radius > 780) {
            //Bottom of player hits bottom of canvas
            player.y = 780 - player.radius;
            Ydiff *= -1;
        }
    }
}

animate();
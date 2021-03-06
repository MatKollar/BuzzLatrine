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
        drawPlayer();
        drawArrow();
        drawBoost();
        drawRestart();
        BG.move();
        cannon.move();
        handleHeightDiff();
        playerHitGround(player);
        handleEnemies();
        score.update(Xdiff, player.tempY);
        score.updateMax();
        score.draw();
    }
    if (Xdiff < 0.4 && Xdiff != null) {  //when player stops, call menu
        menu();
    }
}

function drawPlayer() {
    if (Ydiff < -0.2 && player.tempY < 500) { //player goes up
        player.rotate(-15);
    }
    else if (Ydiff > 0.2 && player.tempY < 600) { //down goes down
        player.rotate(15);
        flushed = false;
        kofolaBoosted = false;
        nitroBoosted = false;
    }
    else if (Ydiff > -0.2 && Ydiff < -0.1 && player.tempY < 500) {  //player goes up
        player.rotate(-8);
    }
    else if (Ydiff < 0.2 && Ydiff > 0.1 && player.tempY < 600) {   //down goes down
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
    
    arrowWidth = 45;
    arrowHeight = 54;

    if (Ydiff < 0 && player.tempY < -2100 ) {
        ctx.drawImage(arrowUp, 800, 35, arrowWidth, arrowHeight);
    }
    else if (Ydiff > 0  && player.tempY < -2100) {
        ctx.drawImage(arrowDown, 800, 35, arrowWidth, arrowHeight);
    }
}

function drawBoost() {
    if (boostAvailable && kofolaBought && !nitroBought) {
        kofolaBoostDiv.style.display = "block";
    }
    else {
        kofolaBoostDiv.style.display = "none";
    }

    if (boostAvailable && nitroBought) {
        nitroBoostDiv.style.display = "block";
    }
    else {
        nitroBoostDiv.style.display = "none";
    }
}

function drawRestart() {
    if (restartAvailable) {
        restartButton.style.display = "block";
    }
    else {
        restartButton.style.display = "none";
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
    if (player.y + player.radius > 780) {
        Ydiff = (Ydiff * elasticity);
        if (player.y + player.radius > 780) {
            //Bottom of player hits bottom of canvas
            player.y = 780 - player.radius;
            Ydiff *= -1;
        }
    }
}

function kofolaBoost() {
    Xdiff += Math.cos(0.785) * 12;
    Ydiff = Math.sin(-0.785) * 10;
    kofolaBoosted = true;
    boostAvailable = false;
}

function nitroBoost() {
    Xdiff += Math.cos(0.785) * 20;
    Ydiff = Math.sin(-0.785) * 15;
    nitroBoosted = true;
    boostAvailable = false;
}

function handleEnemies() {
    spawnFly();
    fly.move();
    fly.draw();
    if (fly.hitted()) {
        hittedY = fly.y;
        hittedX = fly.x;
        hitDuration = 10;
        fly.die();
    }
    if (hitDuration > 0) {
        fly.drawHitEffect(hittedY, hittedX);
        hitDuration--;
    }
}

function spawnFly() {
    if (fly.x < -100) {
        y = getRandomInt(-400,350);
        fly = new Fly(1200, y);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener('load', function () {
    animate();
})
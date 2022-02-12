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
        player.draw();
        BG.move();
        cannon.move();
        handleHeightDiff();
        playerHitGround(player);
    }
    if (Xdiff < 0.2 && Xdiff != null){  //when player stops call menu
        menu();
    }
}

function handleHeightDiff() {
    if(player.tempY >= canvas.height/2) {
        player.move();
    }
    else{
        player.updatePosition();
        BG.moveY();
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

function menu() {
    let startDiv = document.getElementById("start");
    startDiv.style.display = "block";
}

function restartGame(){
    let menuDiv = document.getElementById("start");
    menuDiv.style.display = "none";
    Xdiff = null;
    Ydiff = null;
    score = new Score();
    player = new Player();
    BG = new Background();
    cannon = new Cannon();
    playerShooted = false;
    canShoot = true;
}

function startGame(){
    let mainMenu = document.getElementById("main-menu");
    mainMenu.style.display = "none";
}

function mainMenu(){
    let mainMenu = document.getElementById("main-menu");
    mainMenu.style.display = "block";
}

animate();
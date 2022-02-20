function menu() {
    let startDiv = document.getElementById("menu");
    startDiv.style.display = "block";
}

function restartGame(){
    let menuDiv = document.getElementById("menu");
    menuDiv.style.display = "none";
    let shop = document.getElementById("shop");
    shop.style.display = "none";
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
    let shop = document.getElementById("shop");
    shop.style.display = "none";
}

function shop(){
    let shop = document.getElementById("shop");
    shop.style.display = "block";
    document.getElementById("balance").innerHTML = "$ "+ Math.floor(money);
}
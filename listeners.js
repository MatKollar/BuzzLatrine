//Mouse has moved
canvas.addEventListener("mousemove", e => {
    mousePos = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    }
});

canvas.addEventListener("click", e => {
    //We don't want to be able to shoot a ball at this angle!
    if(angle < -1.5 || angle > 0.5) return;

    if(!canShoot) return;
    canShoot = false;

    player = new Player();
    cannon = new Cannon();
    Xdiff = Math.cos(angle) * 7;
    Ydiff = Math.sin(angle) * 7;

    playerShooted = true;
})
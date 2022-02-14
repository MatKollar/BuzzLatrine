//Mouse has moved
canvas.addEventListener("mousemove", event => {
    mousePos = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop
    }
});

canvas.addEventListener("click", event => {
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

canvas.addEventListener("click", event => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    player.clicked(x,y);
});
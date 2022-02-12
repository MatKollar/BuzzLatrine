const gravity = 0.03;
const friction = 0.005;
const elasticity = 0.5;

let money = 0;
let maxLength = 0;
let maxHeight = 0;
let mousePos = null;
let angle = null;
let canShoot = true;
let playerShooted = false;
let Ydiff = null;
let Xdiff = null;
let player;
let BG;
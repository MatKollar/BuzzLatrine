let gravity = 0.03;
let friction = 0.003;
let elasticity = 0.5;

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
let mPacket;

let flushes = 3;
let flushed = false;

let mPacketBought = false;
let spoilerBought = false;
let wheelsBought = false;
let sportWheelsBought = false;
let suitBought = false;
let helmetBought = false;
let kofolaBought = false;
let nitroBought = false;

let kofolaBoosted = false;
let nitroBoosted = false;
let boostAvailable = false;
let restartAvailable = false;
let kofolaBoostDiv = document.getElementById("kofolaBoost");
let nitroBoostDiv = document.getElementById("nitroBoost");
let restartButton = document.getElementById("restartButton");

let hittedY;
let hittedX;
let hitDuration;


const mPacketSprite = new Image();
mPacketSprite.src = './images/m-packet.png'

const spoilerSprite = new Image();
spoilerSprite.src = './images/spoiler.png'

const wheelsSprite = new Image();
wheelsSprite.src = './images/wheels.png'

const sportWheelsSprite = new Image();
sportWheelsSprite.src = './images/sport-wheels.png'

const suitSprite = new Image();
suitSprite.src = './images/suit.png'

const helmetSprite = new Image();
helmetSprite.src = './images/helmet.png'

const kofolaSprite = new Image();
kofolaSprite.src = './images/kofola.png'

const nitroSprite = new Image();
nitroSprite.src = './images/nitro.png'

class Item {
    constructor(price) {
        this.price = price;
    }
    buy() {
        if (money >= this.price) {
            money -= this.price;
            document.getElementById("balance").innerHTML = "$ "+ Math.floor(money);
            return true;
        }
    }
}

function buyMPacket() {
    let normal = document.getElementById("m-packet-normal");
    let gray = document.getElementById("m-packet-gray");
    mPacket = new Item(10000);
    if (!mPacketBought && mPacket.buy()) {
        mPacketBought = true;
        friction -= 0.0005;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buySpoiler() {
    let normal = document.getElementById("spoiler-normal");
    let gray = document.getElementById("spoiler-gray");
    spoiler = new Item(5000);
    if (!spoilerBought && spoiler.buy()) {
        spoilerBought = true;
        friction -= 0.00025;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buyWheels() {
    let normal = document.getElementById("wheels-normal");
    let gray = document.getElementById("wheels-gray");
    wheels = new Item(3000);
    if (!wheelsBought && wheels.buy()) {
        wheelsBought = true;
        friction -= 0.00025;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buySportWheels() {
    let normal = document.getElementById("sport-wheels-normal");
    let gray = document.getElementById("sport-wheels-gray");
    sportWheels = new Item(5000);
    if (!sportWheelsBought && wheelsBought && sportWheels.buy()) {
        sportWheelsBought = true;
        friction -= 0.0005;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buySuit() {
    let normal = document.getElementById("suit-normal");
    let gray = document.getElementById("suit-gray");
    suit = new Item(15000);
    if (!suitBought && suit.buy()) {
        suitBought = true;
        friction -= 0.0005;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buyHelmet() {
    let normal = document.getElementById("helmet-normal");
    let gray = document.getElementById("helmet-gray");
    helmet = new Item(10000);
    if (!helmetBought && helmet.buy()) {
        helmetBought = true;
        friction -= 0.0005;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buyKofola() {
    let normal = document.getElementById("kofola-normal");
    let gray = document.getElementById("kofola-gray");
    kofola = new Item(10000);
    if (!kofolaBought && kofola.buy()) {
        kofolaBought = true;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}

function buyNitro() {
    let normal = document.getElementById("nitro-normal");
    let gray = document.getElementById("nitro-gray");
    nitro = new Item(15000);
    if (!nitroBought && kofolaBought && nitro.buy()) {
        nitroBought = true;
        gray.style.display = 'none';
        normal.style.display = 'block';
    }
}
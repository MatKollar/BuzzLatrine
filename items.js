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
    mPacket = new Item(10000);
    if (mPacket.buy()) {
        mPacketBought = true;
        friction -= 0.0005;
    }
}

function buySpoiler() {
    spoiler = new Item(5000);
    if (spoiler.buy()) {
        spoilerBought = true;
        friction -= 0.00025;
    }
}

function buyWheels() {
    wheels = new Item(3000);
    if (wheels.buy()) {
        wheelsBought = true;
        friction -= 0.00025;
    }
}

function buySportWheels() {
    sportWheels = new Item(5000);
    if (sportWheels.buy()) {
        sportWheelsBought = true;
        friction -= 0.0005;
    }
}

function buySuit() {
    suit = new Item(15000);
    if (suit.buy()) {
        suitBought = true;
        friction -= 0.0005;
    }
}

function buyHelmet() {
    helmet = new Item(10000);
    if (helmet.buy()) {
        helmetBought = true;
        friction -= 0.0005;
    }
}

function buyKofola() {
    kofola = new Item(10000);
    if (kofola.buy()) {
        kofolaBought = true;
        friction -= 0.0005;
    }
}
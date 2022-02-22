const mPacketSprite = new Image();
mPacketSprite.src = './images/m-packet.png'

const spoilerSprite = new Image();
spoilerSprite.src = './images/spoiler.png'

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
const mPacketSprite = new Image();
mPacketSprite.src = './images/m-packet.png'

class Item {
    constructor(price) {
        this.price = price;
    }
    buy() {
        if (money >= this.price) {
            money -= this.price;
            document.getElementById("balance").innerHTML = "$ "+ Math.floor(money);
            mPacketBought = true;
        }
    }
}

function buyMPacket() {
    mPacket = new Item(10000);
    mPacket.buy();
    if (mPacketBought) {
        friction -= 0.0005;
    }
}
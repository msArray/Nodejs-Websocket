module.exports = class Reader {
    constructor(packet) {
        this.packet = packet;
    }

    decode() {
        this.message = ""
        for (let i = 0; i < this.packet.length; i++) {
            this.message += String.fromCharCode(this.packet[i])
        }
        return this.message
    }

}
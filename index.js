const ws = require("ws");
const Logger = require("./logger")
const Reader = require("./reader")
const server = new ws.Server({ port: 3000 })

new Logger().setup();

const clients = {};

server.on('connection', (socket, req) => {

    this.clientId = generateClientId();

    new Logger().success(`Connect cliend ID:${this.clientId}`, req.socket.remoteAddress);

    clients[this.clientId] = socket;

    socket.send(JSON.stringify({
        type: 0,
        status: 200,
        id: this.clientId,
    }))

    socket.on('message', (data) => {
        console.log(new Reader(data).decode());
        this.data = JSON.parse(new Reader(data).decode());
    })

    socket.on('close', (data, reason) => {
        delete clients[this.clientId];
    })
})

function generateClientId() {
    return Math.random().toString(36).substr(2, 9);
}
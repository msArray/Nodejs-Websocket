const ws = require("ws");
const Logger = require("./logger")
const server = new ws.Server({ port: 3000 })

new Logger().setup();

const clients = {};

server.on('connection', (socket, req) => {

    const clientId = generateClientId();

    new Logger().success(`Connect cliend ID:${clientId}`, req.socket.remoteAddress);

    clients[clientId] = socket;

    socket.send(JSON.stringify({
        type: 0,
        status: 200,
        id: clientId,
    }))

    socket.on('message', (data) => {
        const DataObject = JSON.parse(data)
    })

    socket.on('close', (data, reason) => {
        delete clients[clientId];
    })
})

function generateClientId() {
    return Math.random().toString(36).substr(2, 9);
}
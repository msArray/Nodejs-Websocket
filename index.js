const ws = require("ws");
const server = new ws.Server({ port: 3000 })

const clients = {};

server.on('connection', (socket) => {
    const clientId = generateClientId();

    clients[clientId] = socket;

    socket.send(JSON.stringify({
        type: 0,
        status: 200,
        id: clientId,
    }))

    socket.on('message', (data) => {
        const DataObject = JSON.parse(data)
        console.log(DataObject);
    })

    socket.on('close', (data, reason) => {
        console.log(data, reason);
        delete clients[clientId];
    })
})

function generateClientId() {
    return Math.random().toString(36).substr(2, 9);
}
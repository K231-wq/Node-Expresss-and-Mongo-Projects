const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end("Hello");
})

server.listen(5000, () => console.log("http://localhost:5000"));
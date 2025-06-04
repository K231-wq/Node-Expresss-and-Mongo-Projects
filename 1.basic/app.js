const http = require('http');
const fs = require('fs');
const { error } = require('console');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/bigText.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/bigText.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (error) => {
        res.end(error);
    })
}).listen(5000, () => console.log("http://localhost:5000"));
const http = require('http');
const {readFile, writeFile} = require('fs');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"content-type": "text/plain"});
        res.write("Hello welcome to the page");
        res.end();
    }
    if(req.url === '/block'){
        res.writeHead(200, {'content-type': 'text/html'});
        for(let i=0; i<20; i++){
            for(let j=0; j<10; j++){
                res.write(`<span>${i} + ${j} </span>`);
            }
            res.write("<br>");
        }
        res.end();
    }
    if(req.url === '/about'){
        readFile('./html/about.html', (err, data) => {
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    if(req.url === "/form"){
        readFile('./html/form.html', (err, data) => {
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
})
server.listen(5000, () => {
    console.log('Server is listing the port : http://localhost:5000');
})
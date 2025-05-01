const http = require('http');

const fs = require('fs');
http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Welcome to home page");
        res.end("😀😎");
    }else if(req.url === '/about'){
        fs.readFile('./html/about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }else if(req.url === '/form'){
        fs.readFile('./html/form.html', (err, data) => {
            if(err){
                console.error(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }else{
        res.writeHead(404, {"content-type": "text/html"});
        res.write("<h1>Web Page 404 Error</h1>");
        res.write("<p>Web server cannot be fetch</p>");
        res.end();
    }
}).listen(8085);
console.log("http://localhost:8085");
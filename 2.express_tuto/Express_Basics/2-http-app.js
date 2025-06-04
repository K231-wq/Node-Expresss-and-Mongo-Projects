const http = require('http');
const {readFileSync} = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const qData = url.parse(req.url, true).query;

    const homePage = readFileSync('./navbar-app/index.html');
    const homeStyle = readFileSync('./navbar-app/styles.css');
    const homeImage = readFileSync('./navbar-app/logo.svg');
    const homeLogic = readFileSync('./navbar-app/browser-app.js');

    if(req.url === '/'){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(homePage);
        res.end();
    }
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyle);
        res.end();
    }
    else if(req.url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();
    }
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else if(req.url === '/greeting'){
        res.writeHead(200, {'content-type': "text/html"});
        res.write("<h1>Welcome to home</h1>");
        res.write(`${qData.name}`);
        res.end();
    }
    else{
        res.writeHead(400, {'content-type': "text/html"});
        res.write("<h1>PAGE IS NOT FOUND</h1>");
        res.write(`${qData.name}`);
        res.end();
    }

}).listen(8080, () => {
    console.log("The port is running : http://localhost:8080");
})
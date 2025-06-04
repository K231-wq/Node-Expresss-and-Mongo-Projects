const express = require('express');
const app = express();

const logger = (req, res, nex) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    nex();
}
app.get('/', logger, (req, res) => {

    res.send("Home");
})
app.get('/about', logger, (req, res) => {
    res.send("About");
})
app.listen(5000, () => console.log("The server is running: http://localhost:5000"));
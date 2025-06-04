const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello</h1>");
});

app.get('/about', (req, res) => {
    res.status(200).send("<h1>About Page</h1>");
});

app.listen(5000, () => {
    console.log("The server port is running: http://localhost:5000");
});
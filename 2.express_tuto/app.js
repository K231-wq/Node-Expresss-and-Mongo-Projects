const express = require('express');
const app = express();
const peopleRouter = require('./routes/people.js');
const auth = require("./routes/auth.js");

app.use(express.static('./methods-public'));
//parse from data
app.use(express.urlencoded({extended: false}));
//parse json
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", auth);

app.listen(5000, () => console.log("The server is running: http://localhost:5000"));
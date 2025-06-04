const express = require('express');
const app = express();
const path = require('path');
// middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '/navbar-app/index.html'));
// });
app.listen(5000, () => {
    console.log("Server is running: http://localhost:5000");
})
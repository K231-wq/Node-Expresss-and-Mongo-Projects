const express = require("express");
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js');
require('dotenv').config();
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
const port = process.env.PORT || 5000;

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use("/api/v1/tasks/", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

//db connectivities and method to connect~~~
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running http://localhost:${port}`);
        })
    }catch(err){
        console.log(err);
    }
}
start();
require('./db/mongoose')
const express = require("express")
const taskRouter =  require("./router/taskRouter")
const path = require("path");
require('dotenv').config()

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })) //Allso for the url encoded

app.use('/v1/tasks', taskRouter);


app.listen(port, ()=> {  
    console.log("Server is running on the port "+ port);
})
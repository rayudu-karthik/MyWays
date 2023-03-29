const express = require('express');

const path= require('path');
const addRoute=require('./routes/addBooks');
const homeRoute=require('./routes/home');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(addRoute);
app.use(homeRoute);

app.use((req,res)=>{
    res.status(400).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(4000);
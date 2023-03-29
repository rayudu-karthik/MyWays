const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/addBooks',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','addBooks.html'));
});

router.post('/addBooks',(req,res)=>{
    console.log(req.body);
    res.redirect('/addBooks');
})

module.exports=router;
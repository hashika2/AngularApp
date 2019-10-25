const log =require('./logger');7
const Joi = require('joi');
const express = require('express');
const courses =require('./courses');
const home =require('./courses/home');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api/routes/courses',courses);
app.use('/routes/course',home);

app.set('view engine','pug');
app.set('views','view');


app.use(log);
app.use(function(req,res,next){
    console.log("loking77...");
    next();
})


app.get('/api/android',(req,res)=>{
    res.send("hello friends")
})

const port = process.env.PORT || 3000;
app.listen(port,console.log(`localhost ....${port}.`));



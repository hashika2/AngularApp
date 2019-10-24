const log =require('./logger');7
const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

let courses =[
    { id:1,name:'hashika'},
    {id:2,name:"kama"}
]
app.use(log);7
app.use(function(req,res,next){
    console.log("loking77...");
    next();
})
app.get('/',(req,res)=>{
    res.send("hello word");
})

app.get('/api/android',(req,res)=>{
    res.send("hello friends")
})

app.get('/api/course/:id/:year',(req,res)=>{
    res.send(req.query);
})



app.post('/api/courses',(req,res)=>{

    const schema ={
        name:Joi.string().min(3).required()
    };
    const result =Joi.validate(req.body.schema);
    // console.log(result);


    if(result.error){
        //400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id:courses.length +1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course)
})

app.get('/api/courses',(req,res)=>{
    res.send(course)
})
const port = process.env.PORT || 3000;
app.listen(port,console.log(`localhost ....${port}.`));

app.put('/api/course/:id',(req,res)=>{
    //look up the exist
    //if exist return 404
    const course = courses.find(c=>c.id ===parseInt(req.params.id));
    if(!course) res.status(404).send('the enter id was not found');

    //validate 
    // if valid return 404 and bad request
    const {error } = validateCourse(req.body);

    if(error){
        //400 bad request
        res.status(400).send(error.details[0].message);
        return;
    }

    //update course
    //return the update course
    
    course.name =req.body.name;
    res.send(course);
})

function validateCourse(course){
    const schema ={
        name:Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);
}

app.delete('/api/course/:id',(req,res)=>{
    const course = course.find(c =>c.id === parseInt(req,params.id));
    if(!course) 
    return res.status(404).send('the enter id was not found');

    const index =course.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});


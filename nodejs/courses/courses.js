const express = require('express');
const router = express.Router();


const courses =[
    { id:1,name:'hashika'},
    {id:2,name:"kama"},
    {id:3,name:"nimal"}
]

router.get('/:id/:year',(req,res)=>{
    res.send(req.query);
})



router.post('/',(req,res)=>{

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

router.get('/',(req,res)=>{
    res.send(course)
})

router.put('/:id',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
    const course = course.find(c =>c.id === parseInt(req,params.id));
    if(!course) 
    return res.status(404).send('the enter id was not found');

    const index =course.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});

module.exports.router
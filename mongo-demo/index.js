const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/playground').
then(()=>console.log("database connected")).
catch(error=>console.error("error found :",error));

const courseShema =new mongoose.Schema({
    name:String,
    author:String,
    tags :[String],
    date : {type:String,default:Date.now()},
    isPublish:Boolean
});
const Course = mongoose.model('Course',courseShema);
async function createCourse(){

    const course =new Course({
        name:"angular js project",
        author:"hashika",
        tags :["angular","front end"],
        isPublish :true
    });

    const result= await course.save();
    console.log(result)
}
async function getCourse(){

   const course=await Course
   //.find({author:"hashika",isPublish:true})
  // .find({price:{$gte :10,$lte :27}})

  //start with hashika
  .find({author :/^hashika/})

  //end with maduranga
  .find({author :/maduranga$/})

  //contains Mosh
  .find({author:/.*hashika*./i})
   .limit(10)
   .sort({name:1})
   .select({name:1,tags:1});
   console.log(course);
}

//getCourse();
async function updateCourse(){

    const course = await Course.findById(id);
    if(!course) return;

    course.isPublish=true;
    course.author ="author author";

    const result = await course.save();
    console.log(result);
}
updateCourse('5a68fe2142ae6a6482c4c9cb');

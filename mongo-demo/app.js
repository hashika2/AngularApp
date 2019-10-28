const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises').then(()=>console.log("database connected"));

const courseShema = new mongoose.Schema({
    tags:[String],
    name:String,
    author:String,
    date:Date,
    price:Number,
    isPublish:Boolean
}) ;

const Course = mongoose.model("courses",courseShema);

async function getCourses(){
    return await Course.find({isPublish:true,tags:"backend"})
    .select({name:1,tags:1})
    .sort({name:1});
   

}
async function run(){
    const courses=await getCourses();
    console.log(courses);
}
run();
const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost/mongo-exercises').then(()=>console.log("database connected")).catch(error=>console.error("error",error))

const shema = new mongoose.Schema({
    
    tags:[String],
    name:String,
    author:String,
    date:Date,
    price:Number,
    isPublish:Boolean

}

)
const Course = mongoose.model('courses',shema);

async function getCourses(){
    return await 
    Course
    .find({isPublish:true})
    .or([
        {price :{$gte:15}},
    {name:/.*by.*/i}
    ])
    .sort('-price')
    .select('name author price');
   

}
async function run(){
    const courses=await getCourses();
    console.log(courses);
}
run();

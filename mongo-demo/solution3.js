const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Courses', courseSchema);

async function getCourses() {
  return await Course
  .find({ isPublished: true })
  .or([  
    { price: { $gte: 15 } },
    { name: /.*by.*/i }
  ])
  .sort('-price')
  .select('name author price');
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

7//run();

async function updateCourse(id){
const course =await Course.findByIdAndUpdate({_id:id},{
  $set={
    isPublished=true,
    author="author"
  }
},{new:true});



const resut=course.save();
console.log(resut);

}
updateCourse('5a68fe2142ae6a6482c4c9cb');

async function removeCourse(id){
  //const resut = Course.remove({_id:id})
  const course =await Course.findByIdAndRemove({id})
}

removeCourse('5a68fe2142ae6a6482c4c9cb');

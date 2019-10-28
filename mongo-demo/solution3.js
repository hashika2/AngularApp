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

  const course = await Course.findById(id);
  if(!course) return;

  course.isPublish=true;
  course.author ="author author";

  const result = await course.save();
  console.log(result);
}
updateCourse('5a68fe2142ae6a6482c4c9cb');

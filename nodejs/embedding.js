const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
 authors:[authorSchema]
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
async function updateCourseId(courseId){
   const course= await Course.update({_id:courseId},{
    $unset:{
      'author.name':'John Smith'
    }
   });
  //  course.save();
 
}
createCourse('NodeCourse',[
  new Author({name:'Mosh'}),
  new Author({name:"jhon"})
]);

async function addUser(courseId,author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}
async function removeUser(courseId,authors){
  const course = await Course.findById(courseId);
  const author =course.authors.id(authorId);
  author.remove();
  course.save();
}

removeUser('5dc8499cf89b783840bc19da','5dc8509841b0e63fa06094e0');

//addUser('5dc8499cf89b783840bc19da',new Author({name:'hashika'}));

//createCourse('Node Course', new Author({ name: 'Mosh' }));

//updateCourseId("5dc83c239b19ae1838a9df8a");

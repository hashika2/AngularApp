const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/playground').
then(()=>console.log("database connected")).
catch(error=>console.error("error found :",error));
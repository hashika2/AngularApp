const mongoose =require('mongoose');

const postSchema=mongoose.Schema({
  title:{ type:String,require:true},
  content: { type:String,require:true}
});

mongoose.model("Post",postSchema);

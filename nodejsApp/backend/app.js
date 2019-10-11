const express=require('express');
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const Post=require('./models/post');

const app=express();

mongoose.connect("mongodb+srv://hashika:OQbWqddLVlZO5KNU@cluster0-2st3t.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(()=>{
  console.log('connected database');
})
.catch(()=>{
  console.log('connection faied');
});

app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-control-aow-origin","*");
  res.setHeader(
    "Access-control-allow-header","Origin,x-request-with,content-type,accept"
  );
  res.setHeader(
    "access-control-allow-methods","get,post,patch,delete,option"
  );
  next();
});
//OQbWqddLVlZO5KNU

app.get("/api/posts",(req,res,next)=>{
  const post=new Post({
    title:req.body.title,
    content:req.body.content
  });

 post.save();
  res.status(201).json({
    message:'Post added successfu'
  });
});

app.get("/api/posts",(req,res,next)=>{
Post.find().then(documents =>{
  res.status(200).json({
    message:'Posts fetched successfu',
    posts:posts
  });
})


});

app.delete("/api/posts/:id",(req,res,next) =>{
  Post.deleteOne({_id:req.params.id}).then(result =>{
    console.log(result);
    res.status(200).json({ message:"Post deleted"});
  })
 // console.log(req,this.params.id);

});

module.exports=app;

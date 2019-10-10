const express=require('express');
const bodyParser=require("body-parser");

const app=express();

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
app.get("/api/posts",(req,res,next)=>{
  const post=req.body;

  console.log();
  res.status(201).json({
    message:'Post added successfu'
  });
});

app.use("/api/posts",(req,res,next)=>{

  const posts=[
    {
      id:"fas122323",
      title:"first server side post",
      content:"this is coming from the server"
    },

    {
      id:"sdf122323",
      title:"first server side post",
      content:"this is coming from the server"
    }
  ];
  res.json({
    message:'Posts fetched successfu',
    posts:posts
  });
});

module.exports=app;

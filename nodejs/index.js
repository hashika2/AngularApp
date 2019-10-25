const express =require('express');

const app = express();

const port =5000;

app.use(
    express.json({
        extended : true
    })
)

app.listen(port,()=>{
    console.log(`${port}`)
});
app.get("/:name",(req,res)=>{

    const name = req.params.name
    return res.json({name})
})


app.post("/",(req,res)=>{

    const { name,age,email } =req.body;
    return res.json({user:req.body})
})
const express =require('express');
const router =express.Router();

router.get('/',(req,res)=>{
    res.render('index',{message:"Hello",title:"index"});
})

module.exports = router;
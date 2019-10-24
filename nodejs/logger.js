function logger(req,res,next){
    console.log("loding...");
    next();
}

module.exports = logger;
// function setName(age){
//     console.log("hashika");

//     getAge(function(){
//         console.log("number is ",age);
//     })
//   }
// function getAge(callback){
//     setTimeout(callback,5000)

// }

//   setName(1);
//   setName(2)
  

// console.log(module);
// const getMsg=require('./logger')
// console.log(getMsg.log('message'));

// const path =require('path');

// var name =path.parse(__filename)
// console.log(name)


// const os= require('os');

// const getos=os.totalmem();
// const getmemory=os.freemem();

// console.log("totol memory of os"+getos);
// console.log("free memory "+getmemory);

// const fs=require('fs');

// const error =fs.readdir('$',function(error,files){
//     if(error) console.log("error is ",error);
//     else console.log(files);
// })


// const Eventemitter = require('events');
// const Logger = require('./logger');
// const logger = new Logger();

// emitter.on("messageLogged",(arg)=>{
//     console.log("this is emitter",arg);
// })

// // console.log(emitter.emit('messageLogged',{id:1,HTTP:'HTTP/'}));

// const log = require('./logger');
// logger.log('massage');

/* connect to the server  */

const http =require('http');

const createServer = http.createServer((res,req)=>{
    if(res.url==='/'){
    res.write('hahika');
    res.end();
    }

    if(res.url ==='/ui/course'){
    res.write(JSON.stringify([1,2,4]));
    res.end();
    }
});


createServer.listen(3000);
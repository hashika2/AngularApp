// console.log(__filename);
// console.log(__dirname);

const Eventemitter = require('events')

const url = 'http://mylogger.io/log';

class Logger extends Eventemitter{
    
 log(message){
    //send an HTTP  request
    console.log(message);
}
}

// module.exports =log;
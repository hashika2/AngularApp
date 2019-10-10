const http=require('http');

const server =http.createServer((req,res)=>{
  res.end('this is my first reponse');
});

server.listen(process.env.PORT || 3000);

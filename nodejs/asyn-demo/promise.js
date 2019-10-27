const p= new Promise((resolve,reject)=>{
    //kick off some async work

    setTimeout(()=>{
        resolve(1);
        reject(new Error('message'));
    },2000);
});

p.then(result=>console.log('result',result)).
catch(error=>console.log('error',error.message));

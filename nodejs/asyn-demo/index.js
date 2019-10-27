console.log("before");

console.log("after");
const p =getUser(1);
p.then(use =>console.log(use));

function getUser(id){ 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('printinf...');
            resolve({id:id,gitHubUsername:'mosh'});
        },2000);
    })
        // console.log('user',user);
        // commmit(async,getCommit)

}
// function getRepository(use){
//     getRepository(use.gitHubUsername,name)
// }

// function getTime(id,callback){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('printinf...');
//             resolve({id:id,gitHubUsername:'mosh'});
//         },2000);
//     })
    
    
// }
// function getRepository(name){
//     return Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve( ['return1','return 2','return 3']);
//         },2000)
//     })
   
    
// }

// function  getCommit(){

// }
console.log("before");
getTime(1,function(use){
    console.log("user .....",use);
    getRepository(use.gitHubUsername,(user)=>{
        console.log('user',user);
    
    })
})

console.log("after");

function getTime(id,callback){
    setTimeout(()=>{
        console.log('printinf...');
        callback({id:id,gitHubUsername:'mosh'});
    },2000);
    
}
function getRepository(name,callback){
    setTimeout(()=>{
        callback( ['return1','return 2','return 3']);
    },2000)
    
}
function f1(){
    return new Promise(function(resolve,reject){
       setTimeout(() => {

     const error = false;
     if (!error){
         console.log("congratulation function resolved")
         resolve("welcome ankit");
     }   
        else{
            console.log("your function has rejected")
            reject("ankit");
        }   
       },2000); 
        
        
        
    })
}
f1().then(function(res){
    console.log(res + " it is resolved");
}).catch(function(err){
    console.log("it is rejected"+err);
})
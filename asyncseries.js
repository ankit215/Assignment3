var async=require("async");
async.series({
    name: function(callback){
        setTimeout(function(){
            callback(null ,"ankit");
        },200);
    },
    age: function(callback){
        setTimeout(function(){
            callback(null, 20);
        }, 100);
    }
},
function(err, results){
    console.log(results) // results is now equal to: {name: ankit, age: 20}
});
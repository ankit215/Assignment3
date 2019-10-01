const async=require('async');
async.parallel(
    [
        function(callback)
        {
            setTimeout(function(){
                console.log("Hey my name is ankit");
                callback(null ,1);
            },200);
        },
        function(callback)
        {
            setTimeout(function()
            {
                console.log("Hey my name is ankit");
                callback(null,2);
            },100);
        }
    ],
)
function age(a){
  console.log("My age is " +a)
}
function ank(callback){
  var a = 20;
  callback (a);
}
console.log(ank(age));

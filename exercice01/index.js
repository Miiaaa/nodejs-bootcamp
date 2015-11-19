var name = "Miia";
console.log(name);
function sayHello(){
  return("Hello");
}

var sayHello = function(){
  return "Hello";
}

var o = {};
o.age = 24;
o.disBonjour = function(msg){
  return "Bonjour "+msg;
};

console.log(o.age);
console.log(o.disBonjour("Technocité"));
console.log(process.argv);

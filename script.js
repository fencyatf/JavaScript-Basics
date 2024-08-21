document.write("Hello World");
document.write("<br>");
document.write("Hello World");

console.log("This is a test message");
console.warn("Warning");
console.error("Error Message");

let person
person = "Fency";
console.log(person)

var age=25
console.log(age)

const pi=3.14;
console.log(pi);

console.log(a)
var a=10

// console.log(b)
// let b=10            //Hoisting


//Var
function varTest(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x); 
}
varTest()


//Let
function letTest(){
    var y = 1;
    if(true){
        var y = 2;
        console.log(y);
    }
    console.log(y); 
}
letTest()
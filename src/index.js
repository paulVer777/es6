console.log("Hello World!");


//

for (var i = 0; i < 4; i++) {

    console.log(i);


}

console.log(i);

///let

/*
for (let i = 0; i < 4; i++) {

    console.log(j);


}

console.log(j);


*/

//redeclaration

// var can be redeclared

/*

var name="Marry";
var name="John";


//let cannot

let name2="Jason";
let name2="Michael";

*/

//hoisting

//var is hoisted
// let isnt hoisted

function f() {

    x=2;
    var x
    console.log('hoisting var',x)


}

function g() {

    x=2
    let x

    console.log('hoisting let',x)

}


//const, const nie da się nadpisać, jest to wartość stała.
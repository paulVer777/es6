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

/*

function f() {

    x = 2;
    var x
    console.log('hoisting var', x)


}

function g() {

    x = 2
    let x

    console.log('hoisting let', x)

}

*/
//const, const nie da się nadpisać, jest to wartość stała. Let można nadpisywać.


//Const
/*
const x = 10;
x = 5;

*/
//nie można ponownie inicjalizowac.


//Template strings

const name='Mateusz';

const helloTxt=`Hello ${name}!`;

console.log(helloTxt);


///


let isGreenFavourite=false;

console.log(
    `My favourite color is ${isGreenFavourite ? '':'not'} green!`
);

//ARROW FUNCTIONS

const addOne=(a)=>{

    return a+1

};

console.log(addOne(2));


//skrocona wersja

const addOneV2=a=>{

    return a+1;

};

//skrocona wersja 2

const addOneV3=a=>a+1;

//


//funkcja dodająca dwie cyfry

const sum=(a,b)=>a+b; //jesli robi sie klamerki musi byc return:)



/////////////////////////////

/////////Funkcja samo wywolujaca sie przypisana do zmiennej////////

const suma=((a,b)=>a+b)(4,4);

alert(suma);

/////////////////////////
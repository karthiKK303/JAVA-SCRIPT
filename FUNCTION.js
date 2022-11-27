// FUNCTION DECLARATION

let num1=12;
let num2=24;
function add(){
    let result = num1+num2;
    console.log(result);
}
add();

// FUNCTION EXPRESSION
let add1 = function add(){
    let result1 = num1+num2;
    console.log(result1);
}
add1();

//ANONYMOUS FUNCTION

let add2= function(){
    let result2= num1+num2;
    console.log(result2);
}
add2();

// ARROW FUNCTION
let add3= ()=>{
    let result3=num1+num2;
    console.log(result3);

}
add3();

// FUNCTION ARGUMENTS
function kk(){
    let sum =0;
for(let key of arguments){
sum = sum + key
}return sum;
}
 let kn= kk(23,34,35,678888,36);
 console.log(`this my salary ${kn}`);

 // REST OPERATOR

 function restopp(...expense){
    let total=expense.reduce((a,b)=>a+b)
    return total;
 }
 let rest=restopp(23,34,35,678888,9999999,36);
 console.log(`this my salary ${rest}`);




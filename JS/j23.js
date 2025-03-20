// var and let vs const
// scope

// var-- functional scope 
// let and const--  block scope 

// variable shadowing 


function  t1() {
    var a = "ho"; 
    let b  = "hii";

    if(true){
    let a = "deer";
    // var b = "fish";

    console.log(a);
    console.log(b);

    // boundary ofscope  var and let  but not interchange
    //  the let and var it is illegal scoping.  errror varialbe is already define 


    }
    t1();
}
// delecration and insliaztion 

var a ; // it didnot give error we can declare many time not in cause of let  it give error
var a ;
        //we can declare the var  in same scope but not the let and const .
let a ; 
let a;

//const a ;   // in case of const we nned to declare the value and intialize it 
//const a; 

// hosting  the declarationof  variable, function and class top of the scope during comp. phase  is called hosting
// In var variable insilize is undefined and let and const remains temporaly dead zone before  insilize 

// *** temporly dead zone -- is the time between declaration and insilization in the let and const variable . the term where variable is in scope but not they not declare yet 
var count ;
console.log(count);

code1
function abc(){
    console.log(a);

    var a =10;
    
}
abc()


function abc(){
    console.log(a,b,c);

    var a =10;
    let b =20;
    const c=30;
    
}
abc()

console.log(count)
let count = 1;
var count = 2;





let a = 10 ;
const b = 12;
var c = 12 ;


//{} -----  scope  when {} come with if-else fun or function    is call function scope 
 
/*{
 inside-----  the loop or function is a  block scope 
 outside is global scope  
}*/


const addOne = function(num){
    return num +1 
}
addOne(5)

const addTwo = function(num){
    return num +2 
}
addTwo(5)

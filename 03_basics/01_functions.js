function sd() {
    // console.log("hiii");
}
sd() 


//   define function when we in puts called parameter   
function addTwoNumbers(number1 ,number2){
        console.log(number1 + number2);
}


// when call a func. called argument.
//addTwoNumbers() // NaN
//addTwoNumbers(3, 4) // 7
 //addTwoNumbers(3, "a") // 3a 


function addTwoNumbers2(number1 ,number2){
    // let result = number1 + number2
    // return result 
}
const result = addTwoNumbers2(23 ,34)
//console.log( "result : ", result);


  function loginUserMessage(username){
    if(username === undefined){
        console.log("enter username");
    }
    return `${username} just logged in `

  }
// console.log(loginUserMessage());


/*
""-- call false 
undefined -- call false value 
*/


// ... rest operator 

function calculateCartPrize(...num1){

    return num1 

}
 console.log(calculateCartPrize(200, 300 ,300 ));


const user = {
    name : "ram",
    id : 3
}
function objectHandle ( anyobject){
    console.log(`name is ${anyobject.name } and id is ${anyobject.id}`);
    
}
// objectHandle(user)
 

 const user = {
     username : "jasmit",
     id : 3,
      welcome: function() {
        console.log(`${this.username} ,welcome to website`);

    }
    //// this function is used to create current context ....
    //  when we run this function in browser  called node dino  etc. global object is window object is empty object 
    

}

user.welcome()
console.log(this);

 const chai = () => {
    let username = "jasmit"
    console.log(this.username);
 }


 // arrow and this function are empty {}
 //arrow syntax 
 const audio =  (num1, num2) =>{
    return num1 +num2
}



/*
IMMEDITLY INNVOKED FUNCTION EXPRESSION (IIFE)
*/


function chai(){
    console.log(`DB CONTINUE`)
}

/*  ()() 
FIRST () WE WRITE FUNCTION DEFINATION .
() EXCUTION 

IIFE -- GLOBAL scope pollution cause problem  to remove the problem we use iife function . 
 */





// javascript excution context --------> 

 /* global EC 
 1. global EC
 2.function EC
 3.Excutioin phase 

                [{}] 1. memmory creation phase --- place where wee locatre the variable memory  allocation.
     2 .excution phase --- it excution +,- all operator.


     {firstly code excuted in global function and allocate by [this func.]
     {second} we create memmory phase collect all variale 
     

    }


*/

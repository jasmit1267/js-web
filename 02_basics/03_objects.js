//singelton

//Object literals
const mySym =  Symbol("key1");

const  jsuser = {
    name: "jasmit",
    age : "21",
    email: "ja33@gmail.com",
    [mySym] : "mykey1"
}  
jsuser.email = "hitesh@fb.com"
// Object.freeze(jsuser)
jsuser.email = "js2322@microsoft.com"
// console.log(jsuser);

// console.log(jsuser[mySym])



jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
}




// console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greeting2());



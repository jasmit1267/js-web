// Map Filter and Reduce are the array prototype 

// Map --->  Map object holds key-value pairs and may be used as either a key or a value.
// const counts = [1,2,3,4]
// const addThree = counts.map((count,i,arr)=>{
//     return count+3
// });
// console.log(addThree);


// Filter ---> filter method take in an array which full-fill the condition if  condtion is true it push into output array 
// if  condtion is not  true it  not push into output array

const types = [1,2,3,4]
const geaterthanTwo  = types.filter((type)=>{
    return type>=2;
});
console.log(geaterthanTwo);

//reduce --> iterates over an array, applying a reducer function to each element, accumulating a single output value.
            //It takes an initial value and processes elements from left to right, reducing the array to a single result. 
            //It is useful for doing operations like max in an array, min in an array and sum of array

//code 3->  
const nums = [1,2,3,4];

const sum = nums.reduce((acc,curr,i,arr)=>{
    return acc+curr;
},0);
console.log(sum);



// pollyfills for map()  / return the each and  every vlaue and modify it in the call back function
//filter() / return the array which full-fill the condition sastify the condition
//reduce() / return the single value after the operation
Array.prototype.myMap = function(cb){
    let temp =[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }

    return temp;
};

const counts = [1,2,3,4]
const addThree = counts.myMap((val,i,counts)=>{
    return val+3;
})

console.log(addThree);

document.addEventListener('click', () => {
    console.log(func(100, 200));
})

document.addEventListener('click', cb);

// const cb = () => {
//     console.log(func(100, 200));
// }

function func(a, b) {
    return a+b;
}

// Function Call
// func(5, 10);

function callMe(func) {
    let k = func(10, 20);
    return k
}

// callMe(func(10, 20)); // callMe(30) => Error
console.log(callMe(func)); // 

// map - it returns an array

let arr = [10, 20, 30, 40, 50];

// 1st Method
const k1 = arr.map((val, i, arr) => {
    return val - 10
});

console.log(k1);

arr.forEach(cb);
const k2 = arr.filter(cb);
const k3 = arr.reduce(cb, initVal);

// filter 

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i=0; i<this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
};

const hells = [10, 20, 30, 40, 50];

const k4 = hells.myFilter((hell) => {
    return  hell> 20;
});
console.log(k4);
// filter - it returns an array

//arr.rediuce ((acc, curr, i, arr) => {}, initVal)

Array.prototype.myReduce = function(cb, initVal){
    var accumalator = initVal;

    for(let i=0; i<this.length; i++){
        accumalator =accumalator? cb(accumalator, this[i], i, this):this[i];
    }
    return accumalator;

}
const nun = [1,2,3,4];

const sub = nun.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
},0);
console.log(sub);

// qes1
let students=[
    {names:"Ho",roll:12,marks:90},
    {names:"hi",roll:11,marks:80},
    {names:"hy",roll:10,marks:50}
];
// const names = students.filter((student) => {
//     return student.roll===10&&student.marks>60;
// });
// console.log(names);

const sum = students.reduce((acc,curr)=> acc +  curr.marks,0)
console.log(sum);

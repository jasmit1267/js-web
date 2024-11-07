// for of
 
const arr = [1,2,3,4,3,2]
for (const i of arr) {
    // console.log(i);
}

// maps

const map = new Map()
map.set('Fr',"France")
map.set('IN',"India")
map.set('AUS',"Austrila")

// console.log(map);


for (const [key ,value] of map) {
    // console.log(key , ':-' , value);
}


// in the map  'object' forof loop is not appropirate for the object to  iteratable .

const uobject = {
    hello : 'hi',
    mutal : 'fund'
  
}
// console.log(uobject);

// for (const [key ,value] of uobject) {
    // console.log(key , ':-' , value);
// }




const coding  = ["hello","hloo","hio","fef"]
coding.forEach(function(val){
    console.log(val);
    
})
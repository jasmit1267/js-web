const tinderUser =  new Object()

 tinderUser.id = "1212"
 tinderUser.name = "fjrkkd"
 tinderUser.isloggedIn = false

// console.log(tinderUser);

const user = {
    fullnmae:{
        username:{
            firstname: "hello",
            lastname :"hii"
        }
    }
}


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const java = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
         id: 2,
        email: "f@gmail.com"

    },
    {
         id: 3,
        email: "g@gmail.com"
    },
]
java[2].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

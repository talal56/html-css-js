// console.log("2">2)
// console.log("02"==2)//convert 02 into number
// console.log("02"===2) //it also check datatype
// console.log(null==0)
// console.log(null>=0)//convert null into 0 then compare

//symbol
let id = Symbol('12')
let anotherId = Symbol('12')
// console.log(id == anotherId)

let bignumber = 1223435252566634556666666n
// console.log(bignumber)

//Stack vs Heap
//Stack is for primitive data types
//Heap is for Non primitive data types

let name = "Talal"
console.log(name)
let anotherName = name
anotherName = "Azhar"
console.log(anotherName)

let userId = {
    email : "talal@gmail.com",
    contact : 3140933024
}
console.log(userId.email)
let secondUser = userId
secondUser.email = "azhar@gmail.com"
console.log(secondUser.email)
console.log(userId.email)
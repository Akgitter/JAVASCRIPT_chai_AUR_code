//Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigINt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id== anotherId);

// const bigNumber = 3423425551414123n



//Reference (Non Primitive)

// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name :"hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world")    
}



// Stack(Primitive), Heap (Non-Primitive)

//

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "usergoggle.com",
    upi: "user@ybl.com"
}

let userTwo = userOne

userTwo.email ="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);






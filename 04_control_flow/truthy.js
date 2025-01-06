const userEmail = "ankur@ai.com"

if (userEmail) {
    console.log("Got User Email");  
}else {
    console.log("dont have user email");
}

//falsy values 

//false, 0, -0, BigInt 0n, "" , null, undefined, Nan

//Truthy values

// "0", 'false' , " ", [], {}, function(){} empty function, 

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalesing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20


// Terniary Operator

console.log(val1);

condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



// var c = 300//Global scope
let a = 300
if (true) { //inside this called block scope
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


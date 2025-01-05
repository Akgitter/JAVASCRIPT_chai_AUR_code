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

function one(){
    const username ="hitesh"

    function two(){
    const website = "youtube"
    console.log(username);
}
// console.log(website);

two()

}

// one()

// if (true) {
//     const username = "muskan"
//     if (username === "muskan") {
//         const website = "youtube"
//         console.log(username + website);
//     }
//     // console.log(website);

// }

// console.log(username);

// +++++++++++++++++++++ interesting ++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1

}



addTwo(5)
// also called epression
const addTwo = function(num){
    return num + 2
}


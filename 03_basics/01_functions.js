//Defination of Fxn
function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//Reference of fxn
// sayMyName

// execution of fxn
// sayMyName()

// function addTwoNumberes(number1,number2)
// {
//     console.log(    number1 + number2);//It will not return any value to thecalled fn
// }

function addTwoNumberes(number1,number2)
{
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Hitesh")//Unreachable code, bcz after return
}

const result = addTwoNumberes(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "lodu"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ankur"))


function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);   
}

//handleObject(user) //For accesing data of object user
handleObject( {
    username: "sam",
    price: 399
}) //Directly giving the object without any name

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
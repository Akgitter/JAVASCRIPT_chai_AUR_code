
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index +2
    
}

// let myArray = ['flash',"bataman","superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
    
// }

let score = 1

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


//Higher order array loops

const arr =[1, 2, 3, 4, 5]

for(const num of arr) {
    console.log(num);
    
}

const myObject = {
    'game1': 'NNFS',
    'game2': 'Spiderman'  
}
//for of loop
for (const [key, value] of map){
    console.log(key, ':-', value);
    
}


const myObkect = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject){
//     console.log(key, ':-', value);
    
// }
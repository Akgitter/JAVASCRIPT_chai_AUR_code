const myObject= {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb", "py", "java", "cpp" ]
//for of loop
for(const key in programming){
    //console.log(key);
  //  console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

//objects ke liye for in loop
//arrays ke liye for of loop


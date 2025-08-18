// for of loop
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
}
const nickname = "your name is vikas"
for (const char of nickname) {
    if (char != " ") {
         console.log(char);
    } else {
        break;
    }
   
    
}
// map
const map = new Map()
map.set('in',"india")
map.set('fr',"france")
map.set('pak',"pakistan")
map.set('fr',"france")
console.log(map);

for (const [key,value] of map) {
    console.log(key ,':-',value);
    
    
}

// for of loop did not work on objects

const myobject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python"
}
for (const key  in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}
 const programming = [ "js","cpp","c","py"]
 for (const key in programming) {
   console.log(programming[key]);
   
 }

//  for each loop
const coding = ["js","java","py","c"]
coding.forEach((item)=>{
    console.log(item);
    
})

const myCoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
},
    {
    languageName : "java",
    languageFileName : "java"
},
    {
    languageName : "python",
    languageFileName : "py"
}
]
myCoding.forEach( (new_item)=>{
    console.log(new_item.languageFileName);
    
})
// object literals 
const mySym = Symbol("key1");

const jsUser = {
    name : "vikas",
    class : "b.tech",
   [ mySym]: "mykey1",          //ye symbol define krne a tarika hai 
    "age": 20,
    location: "haryana",
    lastLogginDay: ["monday", "tuesday"]
}
console.log(jsUser.location);
console.log(jsUser["age"]);

console.log(jsUser["name"]);
console.log(jsUser[mySym]);   // yha doubl cott isliye nhi lgaye kyuki ye symbol h

//method of object
jsUser.name = "ansh"
console.log(jsUser);
// Object.freeze(jsUser)
jsUser.name = "ankita"

// function
jsUser.greeting= function(){
    console.log("hello");
    
}



jsUser.greetingTwo = function(){
    console.log(`hello vikas, ${this.age}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


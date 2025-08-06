const user = {
    name: "vikas",
    age: 18
}
function handleObject(anyobject) {
    console.log(`student name is ${anyobject.name} and his age is ${anyobject.age} `);

}
handleObject({
    name : "jatin",
    age : 25
}) // isme hnme object ko function mai laaye hai


const myNewArray = [122,23,33,3]
function returnarrayvalue(getarray){
    return getarray[2]
}
console.log(returnarrayvalue(myNewArray));

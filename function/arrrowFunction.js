const user = {
    kothewali: "shubham",
    rate : 300,
    welcomeMessage : function(){
        console.log(`${this.kothewali},welcome`);
        // console.log(this);
        
        
    }
    
}
user.welcomeMessage()
user.kothewali = "amandeep"
user.welcomeMessage()
        console.log(this);  // this method yha empty show krega 
        // browser k andr sbse zyada global object hai vo hai window object

// arrow function
function sum(){
    console.log(this);
    
}
sum()

// const sum = (num1,num2)=>{
//     console.log(num1+num2);
//     // console.log(this);
    
    
// }
sum(2,4)

let printanything = ()=> (console.log("hello everyone"))
printanything()

let object = ()=> ({name : "vikas"})

console.log(object())


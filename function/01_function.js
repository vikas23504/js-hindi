// function sayHello(){
//     console.log("hello");
//     console.log("gaurav");
    
    
// }
// sayHello()
function addTwoNum(num1,num2){
    let result = num1+num2;
    return result
    
}
 let result = addTwoNum(2,3)
 console.log(result);
 

 function addTwoNum(num1,num2){
    return num1+num2;
    
    
}
 let reult = addTwoNum(2,9)
 console.log(reult);

 function login(username = 'vikas') {
    if(!username){
        console.log("please enter a valid username");
        return
        
    }
    return `${username} congrats for a new job`
 }
 console.log(login("sumit"));
 
 
 



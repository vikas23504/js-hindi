// singlton object
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = " vikas"
tinderUser.class = "b.tech"
console.log(tinderUser);
 

const regularUser = {
    email : "vikas@gmail.com",
    fullName:{
        userName:{
            firstName : "vikas",
            lastName : "singh"
        }
    }
}
console.log(regularUser.fullName.userName.lastName );

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign(obj1,obj2)        // ye parameter objects ko combine k liye use kiya jata hai\
console.log(obj3);




   
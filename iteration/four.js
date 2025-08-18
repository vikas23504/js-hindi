const num = [1,2,3,4,5,6,7,8,9,10]
let mewNum = num.filter((element)=>element>5)
console.log(mewNum);



// map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//  const newNums = myNumbers.map((num)=> { return num *2})
//  console.log(newNums);
 myNumbers.forEach((num)=> {
    console.log(num +10);
    
})
//   reduce 
const element =[1,2,3]
const  total = element.reduce((acc ,currval)=>{
    console.log(`acc : ${acc} and curval: ${currval}`);
    
    return acc + currval
},0)
 
console.log(total);
 

const myArr = [0,1,2,3,4,5,6,7]
console.log(myArr);

// method of array
myArr.push(8);
console.log(myArr);   // for insert

myArr.pop();            // for delete
console.log(myArr);

myArr.unshift(45);        // insert in starting
myArr.shift();              // dlt in starting
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();  // ye piche wale array ko string type mai lata hai
console.log(newArr);
console.log(typeof newArr);

const myn1 = myArr.slice(1,4)       // isme last range print nhi hoti 
console.log(myn1);

const myn2 = myArr  .splice(1,4);       // isme last range print hoti hai
console.log(myn2);



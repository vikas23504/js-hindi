const  fruit_list = ["apple", "mango","banana"];
const  vegetable_list = ["onion","carrot", "potato"];
fruit_list.push(vegetable_list);    // yha push mai new array ek he count kiya jayga 

console.log(fruit_list);

const  new_item = fruit_list.concat(vegetable_list);
console.log(new_item);

const renew_item = [...fruit_list, ...vegetable_list];
console.log(renew_item);

let another_array = [1,2,3,[3,45],5,54,4,[2,[1,2,3]]];
let real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("vikas"));
console.log(Array.from("vikas"));
console.log(Array.from({name: "vikas"}));


let T1 = 20
let T2 = 40
let T3 = 60

console.log(Array.of(T1 ,T2,T3));


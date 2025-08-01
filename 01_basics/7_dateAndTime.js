let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025,11,25);
console.log(myCreatedDate.toLocaleDateString());

let myCreatedDates =  new Date("01-14-2025");
console.log(myCreatedDates.toLocaleDateString());

let myTempstamp = Date.now();
console.log(myTempstamp);
console.log(myCreatedDates.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday : "long"
})





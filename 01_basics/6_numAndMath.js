const score = 300;
console.log(score);

const newScore = new Number(200);

console.log(newScore);
console.log(newScore.toString().length);
console.log(newScore.toFixed(3));

const otherNumber = 123.98;
console.log(otherNumber.toPrecision(3));
const numbered = 1000000000000;
console.log(numbered.toLocaleString('en-IN'));

// math

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));
console.log(Math.min(4,7,9,1));
console.log(Math.max(4,7,9,1));



console.log(Math.random());
console.log(Math.random()*10)
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min+1))+min);


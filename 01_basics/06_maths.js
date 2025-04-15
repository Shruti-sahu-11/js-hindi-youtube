//*************math**************** */
let score = 100
console.log(score.toString());
console.log(score.toString().length);
let marks = 56.9867
console.log(marks.toFixed(2));

let othernum = 23.8966
console.log(othernum.toPrecision(3));//it will give 23 but round off other digit ans 23.9

let otherone = 1000000
console.log(otherone.toLocaleString()); // 1,000,000
console.log(otherone.toLocaleString('en-IN')); // will give in indian form like 1,00,000




console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); // it will take 5 only even from 4.1
console.log(Math.floor(4.6)); //it will take 4 only even it there is 4.9
console.log(Math.min(4,8,4,2,6));
console.log(Math.max(4,8,9,6));

console.log(Math.random());
console.log((Math.random()*10)+1);


const min = 20
const max = 90

console.log(Math.floor(Math.random() * (max-min +1)) + min)

console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));

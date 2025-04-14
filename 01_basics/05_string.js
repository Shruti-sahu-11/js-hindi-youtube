const name="nikhil"
const repocount = 50
// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}.`)


let myname = "shruti"
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.length);
console.log(myname.charAt(3));
console.log(myname.indexOf('t'));

let newname = myname.substring(0,4)
console.log(newname);

let othername = myname.slice(0,4)
console.log(othername);
let othername2 = myname.slice(-1)
console.log(othername2);
 
const student = " Henry "
console.log(student);
console.log(student.trim()); //remove extra white spaces from start aand end 
 
let a = "my name is nikhil"
console.log(a.replace("nikhil","shruti"));//it will replace nikhil with shruti

console.log(a.includes("nikhil"));//this will if it is present in string or not
console.log(a.includes("pillu"));//this will if it is present in string or not

console.log(a.split('-'));



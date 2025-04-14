let a = "33"
console.log(a, typeof (a))
let b = Number(a)
console.log(b, typeof (b))
let c="34po"
d = Number(c)
console.log(d,typeof(d))

let abc = false
console.log(Number(abc))
// "33"--33
// "35dg" -- Nan but showing data type NaN
// true--1 false--0
// 33---"33"
let hi = 5
bi=String(hi)
console.log(bi)
console.log(typeof(bi))
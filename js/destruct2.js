// object destruct assignment
var o = {p: 42, q: true};
var {q, p, r = 1} = o;

console.log(p); // 42
console.log(q); // true
console.log(r);
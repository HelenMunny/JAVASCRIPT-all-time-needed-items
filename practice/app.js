// IIFE

const num1 = 10;
const num2 = 20;
function add() {
 console.log(`the result is ${num1+num2}`)
}
add();

(function (num3,num4) {
 console.log(`the result is ${num3+num4}`)
})(10, 20)

// we cannot access num3 and num4. this is IIFE. by this way variables are protected inside a function and global space does not get polluted

var total = 1000;
var test = true;
if (test) {
 var total = "oranges";
 var value = "value";
 console.log(`${total} and ${value}`)
}

console.log(`${total} and ${value}`)
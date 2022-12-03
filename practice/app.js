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

// tagged template literals
const author = "Luther Mark";
const statement = "Life is a battle";
const negative = "not";
const boolean = "true";

const quote = color `here is the statement : "${statement}", by ${author} and it could ${negative} be more ${boolean}`;
console.log(quote);

let result = document.querySelector("#result");
result.innerHTML = quote;

function color(text,...vars) {
 const finalText = text.map(function (item, index) {
  return `${item} <strong class="blue"> ${vars[index]||""} </strong>`
 })
 return finalText.join("");
}

const bob = {
 firstName: "bob",
 lastName: "martin",
 sayName: function () {
  console.log(this)    //here this will points to bob object
  setTimeout(() => { console.log(`hello my name is ${this.firstName} ${this.lastName}`) }, 2000);     //here, this will point to bob object. Because function setTimeout is surrounded by sayname/bob object. 
 }
}


const john = "john";
const sayHello = (person = "susan") => console.log(`hello ${person}`);

sayHello();

const fruits = ['orange', 'banana', 'avocado', 'apple', 'lemon']
// array destructuring
const [orange, , avocado, , lemon] = fruits;
console.log([orange, avocado, lemon])

// swapping the variables
let first = 'orange';
let second = 'banana';
[second, first] = [first, second];
console.log(first, second);
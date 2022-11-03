// Prototypical inheritance model
// traditional method
// function Account(name, initialBalance) {
//  this.name = name;
//  this.balance = initialBalance;
// }

// const john = new Account('John k.', 200)
// Account.prototype.bank = 'Bank of America';
// Account.prototype.deposit = function (amount) {
//  this.balance += amount;
//  console.log(`hello ${this.name}, your balance is ${this.balance}`);
//  }
// console.log(john.bank);
// john.deposit(100);


// ES6 classes. Syntactic sugar for prototypal inheritance

class Account {
 constructor(name,initialBalance) {
  this.name = name;
   this.balance = initialBalance;
 }
 deposit(amount) {
  this.balance += amount;
 console.log(`hello ${this.name}, your balance is ${this.balance}`);
 }

 // if to add proto
 bank = 'Chase';
}

const john = new Account('john',0);
john.deposit(200);
console.log(john.bank);

// call, apply, bind

const johny = {
 name: 'johny',
 age: 28,
}
const susan = {
 name: 'susan',
 age: 27,
}

function greet(city, state) {
 console.log(`Hello everyone, Im ${this.name} and Im ${this.age} years old. I live in ${city} , ${state}`);
}

// call (runs instantly, arguments - list of items)
 
greet.call(johny, 'Little rock', 'AR');

// apply (runs instantly, arguments - array of items)
greet.apply(susan, ['Pine bluff', 'AR']);

// bind (assign, use later, argyments - list of items)
const johnyGreet = greet.bind(johny, 'Faiteville', 'AR');
johnyGreet();

const counter = {
 count: 0,
 increment() {
  this.count++;
  console.log(this.count);
 }
}

let btn = document.querySelector('.btn');


const increment = counter.increment.bind(counter);

btn.addEventListener('click', increment);

// remove event listener
btn.removeEventListener('click', increment);

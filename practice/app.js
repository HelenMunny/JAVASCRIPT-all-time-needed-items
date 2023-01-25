// document.addEventListener('DOMContentLoaded', setupItems);

// select
// let form = document.querySelector('.form');
// let submitBtn = document.querySelector('.submitBtn');
// let item = document.querySelector('#item');
// let alert = document.querySelector('.alert');
// let groceryField = document.querySelector('.groceryField');
// let groceryList = document.querySelector('.groceryList');
// let groceryItem = document.querySelector('.groceryItem');
// let clearBtn = document.querySelector('.clearBtn');


// let edit = false;

// form.addEventListener('submit', function (e) {
//  e.preventDefault();
//  console.log('form submitted')

//  let value = item.value;

//  if (value && edit) {
//   console.log('item added');
//  } else if (!value && edit) {
//   console.log('no item');
//  }

// })


// functions
// function createListItem() {
//  let element = document.createElement('article');
//  element.classList.add('.groceryItem');
// }


// practice
function account(name, initialBalance) {
 let bal = initialBalance;
 function balance() {
  console.log(`hey ${name}, your starting balance is : ${initialBalance} `)
 }
 function deposit(amount) {
  bal += amount;
  console.log(`hey ${name}, your balance is : ${bal} `)
 }
 function withdraw(amount) {
  if (amount > bal) { console.log`hey ${name}, sorry. not enough balance to withdraw.` }
  bal -= amount;
  console.log(`hey ${name}, your balance is : ${bal} `)
  
 }
  

 return { balance: balance, deposit: deposit, withdraw };
}

let helen = account('helen', 200);
helen.balance();
helen.deposit(50);
helen.withdraw(100)

// tagged template literals
const author = "Luther Mark";
const statement = "Life is a battle";
const negative = "not";
const boolean = "true";

const quote = color `here is the statement : "${statement}", by ${author} and it could ${negative} be more ${boolean}`;
console.log(quote);

let result = document.querySelector("#result");
result.innerHTML = quote;

function color(text, ...vars) {
 let finalText = text.map((item,index) => {
  return `item <strong class="blue"> ${vars[index] || ""} </strong>`;
 })

 return finalText.join("")
}

// spread operators
const boys = ['tomy', 'johny', 'peter'];
const girls = ['hina', 'mina', 'shina','tina'];
const friends = [...boys, ...girls];
console.log(friends);

// rest operator
const [tomy, johny, peter, hina, ...rest] = friends;
console.log(tomy, johny, peter, hina, ...rest)

// find, findIndex, every, some
let grades = ['A', 'B', 'A+', 'B'];
let allGoodGrades = grades.every((grade) => grade !== 'c');
console.log(allGoodGrades)

// object.keys(), object.values(), object.entries()
const person = {
 name: 'john',
 age: 25,
 status: 'married',
 profession: 'developer',
}
const keys = Object.keys(person);
console.log(keys)
const values = Object.values(person);
console.log(values)
const entries = Object.entries(person);
console.log(entries)
const newEntries = entries.map(entry => {
 const [first, second] = entry;
 console.log(first, second);
})





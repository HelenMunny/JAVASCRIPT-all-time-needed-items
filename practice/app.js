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
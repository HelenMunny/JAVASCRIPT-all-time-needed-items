

function Account(name, initialBalance) {
 this.name = name;
 this.balance = initialBalance;
 this.deposit = function (amount) {
  this.balance += amount;
  console.log(`hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('John k.', 200)
Account.prototype.bank = 'Bank of America';

console.log(john.bank);
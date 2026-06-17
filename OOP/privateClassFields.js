"use strict";

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Olise", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

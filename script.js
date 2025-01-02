
class BankAccount{

  #balance = 0;

  get balanced (){

    //return this.#balance

    return `$ ${this.#balance.toLocaleString()}`;
  }

  set balanced (amount){

    // if(typeof amount !== "number") {
    //   throw new Error ("نوع مقدار باید عددی باشد");
    // }

    // if(amount<0){
    //   throw new Error ("مقدار باید بزرگتر از صفر باشد");
    // }
     this.#balance = amount;
  }
}

const account1 = new BankAccount();

console.log(account1.balanced);

account1.balanced = 120;

console.log(account1.balanced);


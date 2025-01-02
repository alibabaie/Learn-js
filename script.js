class Wallet {

    #money;

    constructor (){
        this.#money = 0;
    }

    getBalance (){
        return this.#money;
    }

    add (amount){
      if(amount <=0){
        throw new Error ("مقدار باید مثبت باشد");
      }
      this.#money += amount  
    }
 
    spend (amount){
      if(amount > this.#money){
        throw new Error ('موجودی کافی نیست');
      }
      this.#money -= amount;
    }

    #transactionHistory (){
     console.log("Transaction");
     
    }
}

const aliWallet = new Wallet ();
console.log(aliWallet.getBalance());

aliWallet.add(100);
console.log(aliWallet.getBalance());

aliWallet.spend(10);
console.log(aliWallet.getBalance());

console.log(aliWallet.money);
//aliWallet.money+100;

console.log(aliWallet.transactionHistory());







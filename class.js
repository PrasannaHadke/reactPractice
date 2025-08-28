// class Student{
//     constructor(name,age,department){
//         this.name = name,
//         this.age= age,
//         this.department =department
//     }
//     introduce(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }

// const s1 = new Student('prasanna',25,'MCM')
// console.log(s1)
// s1.introduce()


class Car{
    #fuel = 100;
    #burnFuel(){
        this.#fuel -= 1
    }
    start(){
        this.#burnFuel()
        console.log(`Car is starting`)
    }
}

let buggati = new Car()
// buggati.start()
// console.log(buggati)

class BankAccount{
    #balance;
    constructor(holdersName,balance = 0){
        this.holdersName = holdersName,
        this.#balance = Number(balance)
    }
    deposit(balance){
        this.#balance += balance
    }
    withdrawn(balance){
        this.#balance -= balance
    }

    set balance(balance){
        if (isNaN(balance)) {
            console.error("Invalid Balance")
            return
        }
        console.log(`Balance set Successfully`)
        this.#balance = balance
    }
    get balance(){
         return this.#balance
    }
}

// let praAccount = new BankAccount('prasanna', 500)
// praAccount.balance = 'adf';
// praAccount.balance = 700;
// console.log(praAccount.balance)
// console.log(praAccount)

let praAccount = new BankAccount('prasanna', 500);

// Set new balance using setter
praAccount.balance = 'adf'; // ❌ Invalid Balance
praAccount.balance = 1200;  // ✅ Balance set successfully

// Get balance using getter
console.log(praAccount.balance); // 1200

// See the object
console.log(praAccount);

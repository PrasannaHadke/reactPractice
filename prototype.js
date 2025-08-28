function BankAccount(holdersName,balance = 0){
    this.holdersName = holdersName,
    this.balance = Number(balance)
    // this.deposit = function(balance){
    //     console.log('Balance', balance)
    // }
    // this.withdrawn = function(balance){
    //     this.balance -= balance
    // }
}

BankAccount.prototype.deposit = function(balance){
        this.balance += balance
    }
BankAccount.prototype.withdrawn = function(balance){
        this.balance -= balance
    }

let praAccount = new BankAccount('prasanna', 122)

praAccount.deposit(50)
console.log(praAccount)


class Employee{
    constructor(name,designation){
        this.name = name,
        this.designation = designation
    }
    greet(){
        console.log(`hello, ${this.name} his ${this.designation}`)
    }
}

let e1= new Employee('prasanna', 'software developer')
console.log(e1)
e1.greet()
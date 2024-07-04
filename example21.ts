class BankAccount {
    private accountNumber: string
    protected balance: number

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber
        this.balance = 0
    }

    public deposit(amount: number): void {
        if(amount > 0) {
            this.balance += amount
            console.log(`Deposited ${amount}. New balance ${this.balance}`)
        } else {
            console.log("Invalid deposit amount")
        }
    }

    public withdraw(amount: number): void {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount
            console.log(`Deposited ${amount}. New balance ${this.balance}`)
        } else {
            console.log("Invalid withdrawal amount or insufficient balance")
        }
    }
}


// example usage
const bankAccount = new BankAccount("12345")
bankAccount.deposit(1200)
bankAccount.withdraw(400)
bankAccount.withdraw(1000)

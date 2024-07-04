type World = "world"

type Greeting = `hello ${World}`


// database error problem

class DatabaseError extends Error {
    constructor(message: string) {
        super(message)
        this.message = "Database error"
    }
}

// simulated database operation function (replace with actual database operation)
function performDatabaseOperation(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new DatabaseError("Database connection failed"))
        }, 2000)
    })
}

// function to perform database operations and handle errors
async function performDatabaseOperations(): Promise<void> {
    try {
        await performDatabaseOperation()
        console.log("database operation succesful ")
    } catch(error) {
        if(error instanceof DatabaseError) {
            console.error("database error")
            console.log(`database error: ${error.message}`)
        } else {
            console.error("unexpected error")
            console.log(`unexpected error: ${error.message}`)
        }
    }

}

performDatabaseOperations()
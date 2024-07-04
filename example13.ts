// typescript error handling
class InputError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "message"
    }
}

// function to process user input and validate it
function processUserInput(input: string): void {
    if(!input) {
        throw new InputError("Input is required")
    }

    else if(input.length < 3) {
        throw new InputError("input has to be more than 3 letters")
    }

    console.log(`user input processed: ${input}`)
}

// read user input
const userInput = "charles"

try {
    processUserInput(userInput)
    console.log("Processing complete")
} catch(error) {
    if(error instanceof InputError) {
        console.error(`Input Error: ${error.message}`)
    } else {
        console.error(`Unexpected error: ${error.message}`)
    }

}
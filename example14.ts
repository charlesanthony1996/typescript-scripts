// typescript application example with middleware
import * as fs from "fs"

// custom error class for file-realted errors
class FileError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "FileError"
    }
}

// function to read data from a file and propagate errors
function readDataFromFile(filename: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (error, data) => {
            if(error) {
                reject(new FileError(`Error reading file: ${error.message}`))
            } else {
                resolve(data)
            }
        })

    })
}



// middle ware fucntion handle file-related errors
function middlewareErrorHandling(): void {
    const filename = "test.txt"

    readDataFromFile(filename)
    .then((data) => {
        console.log(`data from a file: ${data}`)
    })
    .catch((error) => {
        console.error(`Middleware error: ${error.message}`)
        throw error
    })
}


// function logs file data
// middlewareErrorHandling()

// main application
function mainApplication(): void {
    try {
        middlewareErrorHandling()
        console.log("application completed")

    } catch(error) {
        if(error instanceof FileError) {
            console.error(`main application error: ${error.message}`)
        } else {
            console.error(`Main application unexpected error: ${error.message}`)
        }
    }
}

mainApplication()

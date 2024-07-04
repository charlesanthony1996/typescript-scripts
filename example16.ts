// multi step workflow with error handling

// custom error classes
class Step1Error extends Error {
    constructor(message: string) {
        super(message)
        this.name = "Step1Error"
    }
}

class Step2Error extends Error {
    constructor(message: string) {
        super(message)
        this.name = "Step2Error"
    }
}

class Step3Error extends Error {
    constructor(message: string) {
        super(message)
        this.name = "Step3Error"
    }
}

// function to simulate step 1 of the workflow
function simulateStep1(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Step1Error("Error in step 1"))
        }, 1000)
    })
}

function simulateStep2(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Step2Error("Error in step 2"))
        }, 1000)
    })
}

function simulateStep3(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Step3Error("Error in step 3"))
        }, 1000)
    })
}

// main workflow function
async function multiStepWorkflowFunction():Promise<any> {
    // try {
    //     await simulateStep1()
    // } catch(error) {
    //     console.error(`Step 1 Error: ${error.message}`)
    //     throw error
    // }

    try {
        await simulateStep2()
    } catch(error) {
        console.error(`Step 2 Error: ${error.message}`)
        throw error
    }

    try {
        await simulateStep3()
    } catch(error) {
        console.error(`Step 3 Error: ${error.message}`)
        throw error
    }

}



multiStepWorkflowFunction().catch((error) => {
    console.error(`Main application error: ${error.message}`)
}) 
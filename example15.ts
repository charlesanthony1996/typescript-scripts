// sequential api requests handling

// api error class extends base error class
class ApiError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "ApiError"
    }
}

// simulated api request function(replace with actual api's)

// theres a randomiser here. dont be fooled
function simulateApiRequest(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.5) {
                reject(new ApiError(`Error in api request for endpoint: ${endpoint}`))

            } else {
                resolve(`Response from api for endpoint: ${endpoint}`)
            }
        }, 1000)
    })
}

// function to make multiple api requests in sequence
async function makeSequentialApiRequests(endpoints: string[]): Promise<string[] | any> {
    const responses: string[] = []

    for(const endpoint of endpoints) {
        try {
            const response = await simulateApiRequest(endpoint)
            responses.push(response)

        } catch(error) {
            console.log(`API Error: ${error.message}`)
            throw error
        }
    }
    return responses
}



// example usage of the above functions
const apiEndpoints = ["/api/endpoints1", "/api/endpoints2", "/api/endpoints3"]


makeSequentialApiRequests(apiEndpoints)
.then((responses) => {
    console.log("Api responses")
    responses.forEach((response: any, index: number) => {
        console.log(`[${index + 1}] ${response}`)
    })
})
.catch((error) => {
    console.error(`Main application error: ${error}`)
    // throw new error
})
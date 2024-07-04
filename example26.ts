function combine(param1: boolean, param2: number): boolean | number {
    if(param1) {
        return param2 * 3
    } else {
        !param1
    }
}

const result1: boolean | number = combine(false, -20)

console.log(result1)
import {add, subtract} from './math_utils'

const num1 = 100
const num2 = 500

const sum = add(num1, num2)
console.log(sum)


const difference = subtract(num1, num2)
console.log(difference)

console.log("The addition of the sum and difference is: ", add(sum, difference))
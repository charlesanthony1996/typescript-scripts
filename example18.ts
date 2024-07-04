// conditional type example

// define a conditional type 'FilterArrayType' that takes an array type T[] and a type 'U'
type FilterArrayType<T, U> = T extends (infer Item)[] ? Item extends U ? Item[] : never : never

// test the filterArrayType conditional type with an array of mixed types
const mixedArray: (string | number| boolean) [] = ["Red", 100, "green", true, 344, "white"]

type numbersArray = FilterArrayType<typeof mixedArray, number>

type stringArray = FilterArrayType<typeof mixedArray, string>

const numbersArray: numbersArray = mixedArray.filter((item) => typeof item === 'number') as number[]

const stringArray: stringArray = mixedArray.filter((item) => typeof item === 'string') as string[]


console.log(numbersArray)

console.log(stringArray)


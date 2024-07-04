// mapped type example

type Food = {
    name: string
    price: number
}

// define a mapped type "ReadOnly" that makes all properties read only
type ReadOnly<T> = {
    readonly [ K in keyof T]: T[K]
}

// create an example object of type food
const product: Food = {
    name: "Italian pizza",
    price: 4
}

// use the readonly mapped type to make the properties read only
type ReadOnlyProduct = ReadOnly<Food>

// create an instance of the 'ReadOnlyProduct' type
const readOnlyFood: ReadOnlyProduct = {
    name: "American burger",
    price: 5
}


// attempt to override but typescript gives an error
// readOnlyFood.name = "French pizza"

// this is possible

// console.log(readOnlyProduct)

product.name = "French pizza"


console.log(readOnlyFood)

// see its overriden
console.log(product)
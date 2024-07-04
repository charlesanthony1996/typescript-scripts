// type manipulation

// generics

function identity<T>(arg: T): T {
    return arg
}

function identity2(arg: any): any {
    return arg
}

let output = identity<number>(1)

// console.log(output)

function identity3<Type>(arg: Type): Type {
    return arg
}

function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length)
    return arg
}

loggingIdentity<string>(["1"])

function identity4<Type>(arg: Type): Type {
    return arg
}

let myidentity: <Type>(arg: Type) => Type = identity

// console.log(myidentity)

// having a different type name for the generic type parameter

function identity5<Type>(arg: Type): Type {
    return arg
}

let myidentity6: {<Input>(arg: Input): Input } = identity

// console.log(myidentity6)

// generic type as a call signature of an object literal type now
function identity7<Type>(arg: Type): Type {
    return arg
}

let myidentity7:  { <Type>(arg:Type): Type } = identity

// console.log(identity7)
console.log(identity7<number[]>([1, 2, 3]).length)


// writing a generic interface to this function

interface genericidentityfn {
    <Type>(arg: Type): Type
}

function identity8<Type>(arg: Type): Type {
    return arg
}

let myidentity8: genericidentityfn = identity8

console.log(identity8<string[]>(["hello", "mello", "marsh", "mellow"]))


// generic classes

// a generic class has a similar shape to a generic interface
class GenericNumber<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
    return x + y
}

console.log(myGenericNumber.add(2, 3))
console.log(myGenericNumber.add(-5 , 3))


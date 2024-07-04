// continuing on generic classes


class GenericNumber2<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}

let stringNumeric = new GenericNumber2<string>()
stringNumeric.zeroValue = "0"
stringNumeric.add = function(x, y) {
    return x + y
}

console.log(stringNumeric.add("h", "e"))

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"))

// generic constraints 

// function loggingIdentity3<Type>(arg: Type): Type {
//     console.log(arg.length)
// }

// arg.length does not exist


interface lengthwise {
    length: number
}

function loggingidentity2<Type extends lengthwise>(arg: Type): Type {
    // having the length property is okay here
    console.log(arg.length)
    return arg
}

loggingidentity2({ length: 10, value: 3})


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4}
console.log(x)

// using class types in generics
function create<Type>(c: { new(): Type}): Type {
    return new c()
}


class beekeeper {
    hasmask: boolean = true
}

class zookeeper {
    nametag: string = "michael"
}

class animal {
    numlegs: number = 4
}

class bee extends animal {
    numlegs = 6
    keeper: beekeeper = new beekeeper()
}

class lion extends animal {
    keeper: zookeeper = new zookeeper()
}

function createinstance<A extends animal>(c: new () => A): A {
    return new c()
}

createinstance(lion).keeper.nametag
createinstance(bee).keeper.hasmask

console.log(createinstance(lion).keeper.nametag)
console.log(createinstance(bee).keeper.hasmask)


// declare function create(): Container<HTMLDivElement, HTMLDivElement[]>
// declare function create<T extends HTMLElement>(element: T): Container<T, T[]>

// declare function create<T extends HTMLElement, U extends HTMLElement>(element: T, children: U[]): Container<T, U[]>



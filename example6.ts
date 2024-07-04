// keyof types in typescript
type point = { x: number, y: number}
type p = keyof point

let item1: point = { x: 2, y: 3}

console.log(item1.x)
console.log(item1.y)


type arrayish = { [ n: number ]: boolean }
type a = keyof arrayish

let item3: arrayish = { 3: false }
console.log(item3)


type mapish = { [ k: string ]: boolean }
type m = keyof mapish

let item2: mapish = { k: true }

console.log(item2)


// the typeof type operator
console.log(typeof "hello world")

let s = "hello"
let n: typeof s;

type predicate = (x: any | number | boolean | string) => boolean
type k = ReturnType<predicate>

let  k = { "charles" : false}

console.log(k)

// remember that values and types arent the same thing

function f() {
    return {x: 10, y: 3}
}

type P = ReturnType<typeof f>



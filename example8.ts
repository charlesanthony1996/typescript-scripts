// conditional types

interface animal {
    live(): void
}

interface dog extends animal {
    woof(): void
}

type example1 = dog extends animal ? number : string

type example2 = RegExp extends animal ? number : string

interface idlabel {
    id: number
}

interface namelabel {
    name: string
}

function createlabel(id: number): idlabel

function createlabel(name: string): namelabel

function createlabel(nameorid: string | number): idlabel | namelabel

function createlabel(nameorid: string | number): idlabel | namelabel {
    throw "unimplemented"
}


// type messageof<T> extends { message: unknown } ? T["message"] : never

// extending types
type nameorid<T extends number | string> = T extends number ? idlabel : namelabel

// using that conditional sort of type
function createlabel2<T extends number | string>(idorname: T): nameorid<T> {
    throw "not implemented"
}

let a = createlabel("typescript")

let b = createlabel(2.8)

let c = createlabel(Math.random() ? "hello": 42)

// 
// type messageof<T> = T["message"]


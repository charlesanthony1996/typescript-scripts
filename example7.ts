// intro to indexed access types on typescript

type person = { age: number;  name: string; alive: boolean; }
type age = person["age"]
type name = person["name"]
type alive = person["alive"]

let item1 = <age>(22)
let item2 = <name>("charles")
let item3 = <alive>(true)

console.log(item1)
console.log(item2)
console.log(item3)

type i1 = person["age" | "name"]

type i2 = person[keyof person]

type aliveorname = "alive" | "name"

type i3 = person[aliveorname]


let item4 = <person["age"]>(22)

const myarray = [
    { name: "charles", age: 22},
    { name: "bob", age: 25},
    { name: "tim", age: 27}
]

console.log(myarray)

type person1 = typeof myarray[number]

type age1 = typeof myarray[age]

type age2 = person1["age"]

function printperson(person: person1): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`)
}

function getpersonbyname(name: string, people: person1[]): person1 | undefined {
    return people.find(person => person.name === name)
}


console.log(getpersonbyname("charles", myarray))

printperson(myarray[2])


class people {
    private people: person1[]

    constructor(people: person1[]) {
        this.people = people
    }

    addperson(person: person1): void {
        this.people.push(person)
    }

    getperson(name: string): person1 | undefined {
        return this.people.find(person => person.name === name)
    }
}

type age3 = person1["age"]



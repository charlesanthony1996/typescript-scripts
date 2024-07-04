// abstract classes
abstract class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract makeSound(): string
}

class Tiger extends Animal {
    makeSound(): string {
        return "roar i am a tiger";
    }

}

class Lion extends Animal {
    makeSound(): string {
        return "Roar i am a lion";
    }
}

const myTiger = new Tiger("Simba")
const myLion = new Lion("Mufasa")

console.log(`${myTiger.name}: ${myTiger.makeSound()}`)
console.log(`${myLion.name}: ${myLion.makeSound()}`)


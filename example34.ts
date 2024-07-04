// type and value
class Container {
    static instances: number = 0

    constructor() {
        Container.instances++
    }
}

type ContainerType = typeof Container

function createInstance(constructor: ContainerType) {
    return new constructor()
}

const instance1 = createInstance(Container)
console.log(Container.instances)


// stack data structure
class Stack<T> {
    private items: T[]= []

    push(item: T) {
        this.items.push(item)
    }

    pop():T | undefined {
        return this.items.pop()
    }
}

const numberStack = new Stack<number>()
numberStack.push(10)
console.log(numberStack.pop())




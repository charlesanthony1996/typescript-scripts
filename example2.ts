class Sprite {
    name = ""
    x = 0;
    y = 0;
   
    constructor(name: string) {
      this.name = name;
    }
}


type Constructor = new (...args: any[]) => {}
 

 
function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1
    _y = 0
    _x = 0
    y = 0
 
    setScale(scale: number) {
      this._scale = scale
    }

    setYValue(y: number) {
        this._y = y
    }

    setoriginalyvalue(y: number) {
        this.y = y
    }
 
    get scale(): number {
      return this._scale
    }
  }
}


const EightBitSprite = Scale(Sprite);
// console.log(EightBitSprite)

const flappySprite = new EightBitSprite("Bird", )
flappySprite.setScale(0.8)

flappySprite.x = 5
flappySprite.y = 10
flappySprite.setYValue(100)
// overrided the original y value
flappySprite.setoriginalyvalue(2.2)
console.log(flappySprite)

// constrained mixins
// modifying the original constructor to accept a generic argument
type Constructor2 = new (...args: any[]) => {}

type GConstructor<T = {}> = new (...args: any[]) => T

// this can make the class constrained to a specific constructor -> constrained base classes
type Positionable = GConstructor<{setPos: (x: number, y: number ) => void }>

type Spritable = GConstructor<Sprite>

type Loggable = GConstructor<{ print: () => void }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
        jump() {
            this.setPos(0, 20)
        }
    }
}

// alternative pattern to writing mixins
class Jumpable2 {
    jump() {
        // return "jump2"
        console.log("jump2")

    }

}


class Duckable {
    duck() {
        return "duck"

    }
}

// base class
class Sprite2 {
    x = 0
    y = 0
}

// then you can create an interface which merges
// the expected mixins with the same name as your base
interface Sprite2 extends Jumpable2, Duckable {
    // apply the mixins into the base class via
    // the js at runtime

}

applyMixins(Sprite2, [Jumpable2, Duckable])

let player = new Sprite2()
player.jump()

console.log(player.x, player.y)

// this can live anywhere in your codebase!
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
            )
        }))
    }))
}



// constraints
const Pausable = (target: typeof Player) => {
    return class Pausable extends target {
        shouldFreeze = false;
    };
};


class Player {
    x = 0
    y = 0
}

const player2 = new Player()
player2.x = 4
console.log(player2.x)


// the runtime aspect can be manually replicated
type FreezablePlayer = Player & { shouldFreeze: boolean }

const player3 = (new Player() as unknown) as FreezablePlayer
player3.shouldFreeze = true

console.log("value of freeze: ", player3.shouldFreeze)


function base<T>() {
    class Base {
        static prop: T
    }
    return Base
}

function derived<T>() {
    class Derived extends base<T>() {
        static anotherProp: T
    }
    return Derived
}
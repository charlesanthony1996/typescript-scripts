// constraints in mixins
// a decorator function which replicates the mixin pattern

class Sprite {
    constructor(name) {
        this.name = name
        this.x = 0
        this.y = 0
    }
}

function Scale(Base) {
    return class Scaling extends Base {
        constructor(...args) {
            super(...args)
            this.scale = 1
            
        }
    }

}
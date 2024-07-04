console.log("hello")


// command to run script after install nodemon and ts-node
// nodemon example1.ts

// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.
 
type Constructor = new (...args: any[]) => {};
 
// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:
 
function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    // Mixins may not declare private/protected properties
    // however, you can use ES2020 private fields
    _scale = 1;
 
    setScale(scale: number) {
      this._scale = scale;
    }
 
    get scale(): number {
      return this._scale;
    }
  }
}

type Constructor2 = [1, 2, 3, 4]

class Constructor3 {}


function Scale2<TBase extends Constructor2>(Base: TBase) {
    // console.log("scale 2 function")
    return "nothing"
}



console.log(Scale2<Constructor2>)

function Scale3<TBase extends Constructor3>(Base: TBase) {
    return "nothing"
}

console.log(Scale3(new Constructor3))


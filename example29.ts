import Geometry from './geometry'



const circle = new Geometry.Shapes.Circle(6)
console.log(`Circle area: ${circle.calculateArea()}`)

const rectangle = new Geometry.Shapes.Rectangle(3, 4)
console.log(`Rectangle area: ${rectangle.calculateArea()}`)
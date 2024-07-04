namespace Geometry {
    export namespace Shapes {
        export class Circle {
            constructor(public radius: number) {}

            calculateArea(): number {
                return Math.PI * this.radius * this.radius
            }
        }

        export class Rectangle {
            constructor(public width: number, public height: number) {}

            calculateArea(): number {
                return this.width * this.height
            }

            calculatePerimeter(): number {
                return 2 * (this.width + this.height)
            }
        }
    }

    export namespace Uitilites {
        export function calculatePerimeter(shape: Shapes.Rectangle): number {
            return shape.calculatePerimeter()
        }

        export function calculateArea(shape: Shapes.Circle): number {
            return shape.calculateArea()
        }
    }
}
export default Geometry
// parameter properties
class Point {
    constructor(public x: number, public y: number) {

    }

    move(dx: number, dy: number) {
        this.x += dx
        this.y += dy

    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
}

const point = new Point(10, 20)
point.move(5, -10)
console.log(point.toString())

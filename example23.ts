// constructor initialization

class Student {
    name: string
    age: number

    constructor(name:string, age: number) {
        this.name = name

        //validate and set the age property
        if(age > 0) {
            this.age = age
        } else {
            this.age = 0
        }
    }
}

// create student objects with different ages
const student1 = new Student("charles anthony", 22)
const student2 = new Student("pradhan anthony", 19)

console.log(student1)
console.log(student2)

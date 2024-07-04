type Student = {
    name: string
    age: number
    email: string
}

// using the mapped type optional
type Optional<T> = {
    [K in keyof T]?: T[K]
}

// create an example object of type 'Student'
const student: Student = {
    name: "Charles",
    age: 27,
    email: "charlesanthony296@gmail.com"
}

// use the optional mapped type to make the properties optional
type optionalStudent = Optional<Student>

const optionalStudent: optionalStudent = {
    name: "Charles",
    age: 27
}

console.log(optionalStudent)
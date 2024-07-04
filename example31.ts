// creating a class interface
class UserProfile {
    id: string
    name: string
    email: string


    constructor(id: string, name: string, email: string) {
        this.id = id
        this.name = name
        this.email = email
    }

    getProfile() {
        return `${this.name} (${this.email})`
    }


}

const user1 = new UserProfile("1", "Charles", "charles@example.com")
console.log(user1.getProfile())
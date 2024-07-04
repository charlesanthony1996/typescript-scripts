class SecureContainer {
    // private field
    #contentxx: string

    constructor(content: string) {
        this.#content = content
    }

    getContent() {
        return this.#content
    }
}

const container = new SecureContainer("Top secret")
console.log(container.getContent())
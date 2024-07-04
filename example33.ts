// this in classes
class Component {
    name: string

    constructor(name: string) {
        this.name = name
    }

    onClick = () => {
        console.log(`${this.name} clicked`)
 
   }
}


const button = new Component("Button1")
const buttonclickedhandler = button.onClick
buttonCllickHandler()
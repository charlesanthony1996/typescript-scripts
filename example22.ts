import UI from "./UI"

const button1: UI.Button = UI.createButton("submit")
console.log(button1)


const button2: UI.Button = UI.createButton("submit", "cancel")

console.log(button2)
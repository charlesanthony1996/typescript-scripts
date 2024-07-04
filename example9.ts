type toarraynondist<Type> = [Type] extends [any] ? Type[] : never;


// mapped types
interface Horse {
    x: 0
    name: "horse name"
}


class Horse2 {
    name = "horse2"
    x = 0
}


type onlyboolsandhorses = {
    [key: string]: boolean | Horse2
}

const conforms: onlyboolsandhorses = {
    del: true, 
    rodney: false
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: Boolean
}
function nameofhorse<onlyboolsandhorses>(del:true, rodney:false) {
    // return "wild"
    console.log("hello")
}

nameofhorse(true, false)

type Features = {
    darkMode: () => void
    newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<Features>



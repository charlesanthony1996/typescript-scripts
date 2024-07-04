// validators

let lettersRegexp = /^[A-Za-z]+$/
let numberRegexp = /^[0-9]+$/

function lettersonlyvalidator() {
    this.isacceptable = function(s) {
        return lettersRegexp.test(s)
    }
}

function zipcodevalidator() {
    this.isacceptable = function(s) {
        return s.length === 5 && numberRegexp.test(s)
    }
}

// some samples to try
let strings = ["hello", "98052", "101"]

let validators = {}

validators["zip code"] = new zipcodevalidator()
validators["letters only"] = new lettersonlyvalidator()

// show whether each string passed each validator
for(let s of strings) {
    for(let name in validators) {
        let isMatch = validators[name].isacceptable(s)
        console.log(`'${s}' ${isMatch ? "matches": "doesnt match"} '${name}'.`)
    }
}

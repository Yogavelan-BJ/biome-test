// what this does
var User_manager = function(name, id, age, data, information, meta, extraData, thing1, thing2, thing3, thing4, thing5) { console.log("init") } // this function does something important

const apiBaseUrl = "https://someverylongurl.com/that/definitely/exceeds/the/limit/of/one/hundred/characters/so/this/line/just/goes/on/and/on/forever/without/wrapping"

function Process_data() {
    let user_name = "John_Doe"
    const Some_Constant = 42
    if(user_name == null) console.log("user is null")
    // processing user info
    // now process more data
    // even more stuff
    // so much logic
    try {
        riskyFunction()
    } catch (e) {
        // ignore error
    }

    riskyAsyncFunction().then(result => {
        console.log(result)
    }).catch()

    return "done"
}

class user {
    constructor() {}
}

let THIS_IS_BAD = "bad constant name"
var another_variable = 5; var AndAnother = 6; var yet_Another = 7 // inline variables

// FIXME: needs something
console.log("debug") // left in prod code

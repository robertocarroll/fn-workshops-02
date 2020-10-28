
// here we are defining a variable
let varA = 10

// there are four functions below, but don't worry
// they are just here to explain how function scope works

// the function below can access and return variable a
function exercise03a() {
    return varA
}

// the function below can also access variable a
// it's defined outside of functionA and so can
// be accessed by other functions within this module
function exercise03b() {
    return varA
}

// the function below has access to and returns variable B
function exercise03c() {
    let varB = 20
    return varB
}

// the function below does not have access to variable B
// this causes the error. there are two ways you could solve this
function exercise03d() {
    // you could define another variable B here or
    // you could move the variable above below variable A
    // which do you think is the more right answer?
    return varB
}

// module exports is more complicated because we're exporting
// multiple functions. this is an object, but don't worry for now.
module.exports = {exercise03a,exercise03b,exercise03c,exercise03d};
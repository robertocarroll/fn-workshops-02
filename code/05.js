// This is a function expression, instead of a function
// declaration. Instead of using the function statement to
// define a function, we are using what is called a 
// 'function expression'. We want to change the function
// so that it takes the word passed in, and reverses it.
// What's wrong with this function? Other than it should
// probably be 'const' rather than 'let' (why for bonus points)

let exercise05 = function (word) {
    return "word".split('').reverse().join('')
}

module.exports = exercise05;
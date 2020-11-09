// we can define a 'default' value for a function, so if
// a function is called with no arguments it reverts to a default
// This needs to work both if an argument is passed, and if it isn't

const exercise06 = function(name="Darkness, My Old Friend") {
    // The below string is called a 'template literal'
    // It's a way of putting a variable into a string
    // Learning two things in one exercise!
    // Anyway not going to tell you what to do, check
    // the tests
    return `Hi ${name}`
}

module.exports = exercise06;
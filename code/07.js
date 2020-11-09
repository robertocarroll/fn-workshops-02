// These are 'arrow functions', so called because they
// don't have 'function' anywhere in the title. Instead
// they're identified by a '=>' after the variable.
// One of these three functions will not work. Which?
// Why not?

// Arrow function with one parameter, no parentheses
const exercise07a = x => {
  return x * 12
}

// Arrow function with two parameters, no parentheses
const exercise07b = (yz) => {
 return y * z
}

// Arrow function with two parameters and parentheses
const exercise07c = (a, b) => {
  return a + b
}

module.exports = {exercise07a,exercise07b, exercise07c};
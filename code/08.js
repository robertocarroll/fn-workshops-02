// In this we want to change a string to a number if 
// possible, or return that's impossible.

function exercise08(string) {
  // this looks like it uses valid built-in 
  // javascript functions, but maybe these need
  // to be checked? MDN or W3 Schools might help!
  if (isNotANumber(parseint(string))) {
    return "That's impossible!"
  } else { return parseint(string) }
}

module.exports = exercise08;
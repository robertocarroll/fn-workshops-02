// We want to tell the user if it's an integer
// If not, we want to return the amount to the right of the decimal point as an integer
function exercise09(number) {
 // is Integer should work, but needs to be fixed
 if (number.iSINTeger) { return "It's an integer!" }
 // there's a few ways to do this. What can you figure out?
 else { return number } 
}

module.exports = exercise09;
// This function takes two arguments
// An array of user objets
// A city as a string
// You need to return an array with only the users from that city

const exercise07 = function(userArray, city) {
  //You could use a loop
  //But do you remember the built in method for this task
  //If not, look it up 
  return userArray.filter(user => user.city === city);
}

module.exports = exercise07;
// javascript doesn't have public and private
// variables like in other languages, however
// you can hide data within a function and refer
// to it using an internal function called a 'closure'

function exercise04(isAuthorised) {
    let publicData = "Public Stuff"

    function hiddenFunction() {
        let privateData = "Hidden Stuff"
        return publicData;
    }
    
    // public Data is accessible here
    // private Data will show as 'undefined'
    // the function above will have access to both
    // change it so that it returns the private data
    // n.b. this data is not at all secret
    // as someone could just look at the code
    // however it's isolated from the rest of 
    // the program

    // this is an if statement, don't worry,
    // we'll look at these more later
    // alls it is doing is checking whether
    // authorisation is passed to this function.
    if (isAuthorised)
    { return hiddenFunction() }
    else
    { return publicData }
}

module.exports = exercise04;
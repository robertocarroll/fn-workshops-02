const { expect } = require('chai')
const exercise06 = require('../code/06.js')

describe.skip('Exercise 6',()=>{
        it('should return Hello and either the argument or a default value',()=> {
            expect(exercise06("World")).to.equal("Hello World");            
            expect(exercise06()).to.equal("Hello Darkness, My Old Friend");
            expect(exercise06("to all my haters")).to.equal("Hello to all my haters")
        })
});
 
const { expect } = require('chai')
const exercise01 = require('../code/01.js')

describe.skip('Exercise 1',()=>{
        it('should return the input!',()=> {
            expect(exercise01("Hello World!")).to.equal("Hello World!");
            expect(exercise01("I hate hello world")).to.equal("I hate hello world")
        })
});
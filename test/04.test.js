const { expect } = require('chai')
const exercise04 = require('../code/04.js')

describe('Exercise 4',()=>{
        it('should make variables private using a closure',()=> {
            expect(exercise04(true)).to.equal("Hidden Stuff");
            expect(exercise04(false)).to.equal("Public Stuff");
        })
});
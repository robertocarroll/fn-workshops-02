const { expect } = require('chai')
const exercise06 = require('../code/06.js')

describe.skip('Exercise 6',()=>{
        it('should return Hello World!',()=> {
            expect(exercise06()).to.equal("Hello World!");
        })
});
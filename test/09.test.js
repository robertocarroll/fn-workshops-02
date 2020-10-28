const { expect } = require('chai')
const exercise09 = require('../code/09.js')

describe.skip('Exercise 9',()=>{
        it('should return Hello World!',()=> {
            expect(exercise09()).to.equal("Hello World!");
        })
});
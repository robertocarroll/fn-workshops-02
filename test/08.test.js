const { expect } = require('chai')
const exercise08 = require('../code/08.js')

describe.skip('Exercise 8',()=>{
        it('should return Hello World!',()=> {
            expect(exercise08()).to.equal("Hello World!");
        })
});
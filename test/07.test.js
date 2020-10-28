const { expect } = require('chai')
const exercise07 = require('../code/07.js')

describe.skip('Exercise 7',()=>{
        it('should return Hello World!',()=> {
            expect(exercise07()).to.equal("Hello World!");
        })
});
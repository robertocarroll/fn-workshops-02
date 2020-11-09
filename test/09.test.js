const { expect } = require('chai')
const exercise09 = require('../code/09.js')

describe.skip('Exercise 9',()=>{
        it('should return amount to right of decimal, if possible',()=> {
            expect(exercise09(0.234)).to.equal(234);
            expect(exercise09(0.54)).to.equal(54);
            expect(exercise09(4)).to.equal("It's an integer!");
        })
});
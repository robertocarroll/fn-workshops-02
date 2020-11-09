const { expect } = require('chai')
const exercise05 = require('../code/05.js')

describe.skip('Exercise 5',()=>{
        it('should reverse a string!',()=> {
            expect(exercise05('amazing')).to.equal("gnizama");
            expect(exercise05('trust')).to.equal("tsurt");
        })
});
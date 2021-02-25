const { expect } = require('chai')
const exercise05 = require('../code/05.js')

describe.skip('Exercise 5',()=>{
        it('should find the index of the banana!',()=> {
            expect(exercise05([ 'orange', 'grape', 'apple', 'banana', 'mango' ])).to.equal(3);
            expect(exercise05([ 'banana', 'orange', 'grape', 'apple', 'mango' ])).to.equal(0);
            expect(exercise05([ 'orange', 'grape', 'apple', 'mango', 'banana' ])).to.equal(4);
            
        })
});
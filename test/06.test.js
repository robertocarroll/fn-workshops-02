const { expect } = require('chai')
const exercise06 = require('../code/06.js')

describe.skip('Exercise 6',()=>{
        it('should check if an array contains a banana',()=> {
            expect(exercise06([ 'orange', 'grape', 'apple', 'mango', 'banana' ])).to.equal(true);            
            expect(exercise06([ 'orange', 'grape', 'apple', 'mango' ])).to.equal(false);
            expect(exercise06([ 'banana', 'grape', 'apple', 'mango', 'banana' ])).to.equal(true);
        })
});
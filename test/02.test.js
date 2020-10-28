const { expect } = require('chai')
const exercise02 = require('../code/02.js')

describe('Exercise 2',()=>{
        it('should add two numbers!',()=> {
            expect(exercise02(12,9)).to.equal(21);
            expect(exercise02(34,89)).to.equal(123);
            expect(exercise02(2,2)).to.equal(4);
        })
});
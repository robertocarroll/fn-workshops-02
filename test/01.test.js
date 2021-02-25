 
const { expect } = require('chai')
const exercise01 = require('../code/01.js')

describe.skip('Exercise 1',()=>{
        it('should return celsius',()=> {
            expect(exercise01(1)).to.equal(34);
            expect(exercise01(20)).to.equal(68);
            expect(exercise01(-10)).to.equal(14);
        })
});
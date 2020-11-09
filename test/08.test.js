const { expect } = require('chai')
const exercise08 = require('../code/08.js')

describe.skip('Exercise 8',()=>{
        it('Should return integer from an unchanged string if possible, else alert this',()=> {
            expect(exercise08("21")).to.equal(21);
            expect(exercise08("356")).to.equal(356);
            expect(exercise08("22a")).to.equal(22);
            expect(exercise08("abc")).to.equal("That's impossible!");
        })
});
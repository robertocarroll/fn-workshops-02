const { expect } = require('chai')
const { exercise03a,exercise03b,exercise03c,exercise03d } = require('../code/03.js')

describe.skip('Exercise 3',()=>{
        it("should return var A for 03a & 03b, var B for 03c & 03d",()=> {
            expect(exercise03a()).to.equal(10);
            expect(exercise03b()).to.equal(10);
            expect(exercise03c()).to.equal(20);
            expect(exercise03d()).to.equal(20);
    })
});
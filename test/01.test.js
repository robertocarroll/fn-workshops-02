 
const { expect } = require('chai')
const exercise01 = require('../code/01.js')

describe.skip('Exercise 1',()=>{
        it('should return Hello World!',()=> {
            expect(exercise01()).to.equal("Hello World!");
        })
});
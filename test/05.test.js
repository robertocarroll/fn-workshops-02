const { expect } = require('chai')
const exercise05 = require('../code/05.js')

describe('Exercise 5',()=>{
        it('should return Hello World!',()=> {
            expect(exercise05()).to.equal("Hello World!");
        })
});
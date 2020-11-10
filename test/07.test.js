const { expect } = require('chai')
const { exercise07a, exercise07b, exercise07c } = require('../code/07.js')

describe.skip('Exercise 7',()=>{
        it('should return x times 12 for exercise07a(), should return y times z for exercise07b(), should return a plus b for exercise07c()',()=> {
            expect(exercise07a(6)).to.equal(72);
            expect(exercise07a(2)).to.equal(24);            
            expect(exercise07a(5)).to.equal(60);
            expect(exercise07b(2,3)).to.equal(6);
            expect(exercise07b(9,10)).to.equal(90);        
            expect(exercise07b(5,7)).to.equal(35);
            expect(exercise07c(4,6)).to.equal(10);
            expect(exercise07c(14,19)).to.equal(33);        
            expect(exercise07c(50,73)).to.equal(123);
        })
});
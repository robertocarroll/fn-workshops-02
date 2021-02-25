const { expect } = require('chai')
const exercise02 = require('../code/02.js')

describe.skip('Exercise 2',()=>{
        it('should convert temperature from C to F and vice versa',()=> {
            expect(exercise02(12,'C')).to.equal('54F');
            expect(exercise02(75,'F')).to.equal('24C');
            expect(exercise02(2,'C')).to.equal('36F');
            expect(exercise02(20,'F')).to.equal('-7C');
        })
});
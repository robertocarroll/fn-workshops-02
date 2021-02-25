const { expect } = require('chai')
const exercise03 = require('../code/03.js')

describe.skip('Exercise 3',()=>{
        it('should make robot object',()=> {
            expect(exercise03(1, 'T-800', 'Assassin')).to.eql({ 
                id: 1, 
                name: 'T-800', 
                character: 'Assassin'
            });
            expect(exercise03(2, 'Bishop', 'Scientist')).to.eql({ 
                id: 2, 
                name: 'Bishop', 
                character: 'Scientist'
            });
            expect(exercise03(3, 'Optimus Prime', 'Leader')).to.eql({ 
                id: 3, 
                name: 'Optimus Prime', 
                character: 'Leader'
            });
    })
});
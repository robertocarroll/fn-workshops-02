const { expect } = require('chai')
const exercise04 = require('../code/04.js')

describe.skip('Exercise 4',()=>{
    it('should get a robot name',()=> {
        expect(exercise04({ 
            id: 1, 
            name: 'T-800', 
            character: 'Assassin'
        })).to.eql('Hello, my name is T-800.');
        expect(exercise04({ 
            id: 2, 
            name: 'Bishop', 
            character: 'Scientist'
        })).to.eql('Hello, my name is Bishop.');
        expect(exercise04({ 
            id: 3, 
            name: 'Optimus Prime', 
            character: 'Leader'
        })).to.eql('Hello, my name is Optimus Prime.');
})
});
/* global describe it */
const assert = require('chai').assert;
const abstractData = require('../abstractData.js');
const dispatchingOnType = require('../dispatchingOnType/dispatchingOnType');
const dataDirectedProgramming = require('../dataDirectedProgramming/dataDirectedProgramming');

const strategies = [
    {value: dispatchingOnType, description: 'Dispatching on type'},
    {value: dataDirectedProgramming, description: 'Data directed programming'}
]

const round = value => Math.round(value * 100) / 100;

strategies.forEach(strategy=>{
    const complex = abstractData(strategy.value);
    describe(`---(SICP)  Abstract Data Strategy: ${strategy.description}---`, () => {
        it('Add Complex (Rectangular form)', () => {
            const n1 = complex.makeRectangular(2,1);
            const n2 = complex.makeRectangular(3,1);
            const n3 = complex.addComplex(n1,n2);
            assert.equal(5,complex.realPart(n3));
            assert.equal(2,complex.imgPart(n3));
            assert.equal(5.39,round(complex.magnitude(n3)));
            assert.equal(0.38,round(complex.angle(n3)));
    
         });
    
         it('Add Complex (Polar form)', () => {
            const n1 = complex.makePolar(2.236,0.46);
            const n2 = complex.makePolar(3.162, 0.32);
            const n3 = complex.addComplex(n1,n2); 
            assert.equal(5.01, round(complex.realPart(n3)));
            assert.equal(1.99, round(complex.imgPart(n3)));
            assert.equal(5.39, round(complex.magnitude(n3)));
            assert.equal(0.38, round(complex.angle(n3)));
         });
    });  
 });

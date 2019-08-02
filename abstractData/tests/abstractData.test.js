/* global describe it */
const assert = require('chai').assert;
const abstractData = require('../abstractData.js');
const add = abstractData.add;
const complex = abstractData.complex;

describe('--- Abstract Data (SICP)---', () => {
    it('Add Complex (Rectangular form)', () => {
        const n1 = complex.makeRectangular(2,1);
        const n2 = complex.makeRectangular(3,1);
        const n3 = add(n1,n2);
        assert.equal(5,complex.realPart(n3));
        assert.equal(2,complex.imgPart(n3));
        assert.equal(5.38,complex.magnitude(n3));
        assert.equal(21.8,complex.angle(n3));

     });
     it('Add Complex (Polar form)', () => {
        const n1 = complex.makePolar(2,1);
        const n2 = complex.makePolar(3,1);
        const n3 = add(n1,n2); 
        assert.equal(5, complex.realPart(n3));
        assert.equal(2, complex.imgPart(n3));
        assert.equal(5.38, complex.magnitude(n3));
        assert.equal(21.8, complex.angle(n3));
     });
 });

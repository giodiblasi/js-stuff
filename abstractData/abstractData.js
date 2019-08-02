/* this is the first abstraction layer (here we are using complex numbers 
 * and we don't know how they are implemented */
const strategies = require('./abstractionStrategies.js');
const complex = strategies();

const add = (complexA, complexB) => 
    complex.makeRectangular(
        complex.realPart(complexA) + complex.realPart(complexB),
        complex.imgPart(complexA) + complex.imgPart(complexB));

module.exports = {add, complex}

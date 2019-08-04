/* this is the first abstraction layer (here we are using complex numbers 
 * and we don't know how they are implemented */

const getAddBystrategy = (strategy) => (complexA, complexB) => 
    strategy.makeRectangular(
        strategy.realPart(complexA) + strategy.realPart(complexB),
        strategy.imgPart(complexA) + strategy.imgPart(complexB));

module.exports = (strategy) => ({
    addComplex: getAddBystrategy(strategy),
    makeRectangular: strategy.makeRectangular,
    makePolar: strategy.makePolar,
    realPart: strategy.realPart,
    imgPart: strategy.imgPart,
    magnitude: strategy.magnitude,
    angle: strategy.angle
});

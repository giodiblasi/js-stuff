const {
    makeRectangular,
    realPartRectangular,
    imgPartRectangular,
    magnitudeRectangular,
    angleRectangular,
    makePolar,
    realPartPolar,
    imgPartPolar,
    anglePolar,
    magnitudePolar
 } = require('./complexForms');
const tag = require('../tag');


const applyByTag = (taggedComplex, methods) => {
    const typeTag = tag.getTypeTag(taggedComplex);
    const complex = tag.getContent(taggedComplex);
    return methods[typeTag](complex)
}

const realPart = taggedComplex =>
    applyByTag(taggedComplex,
                {
                    rectangular: realPartRectangular,
                    polar: realPartPolar
                });

const imgPart = taggedComplex =>
    applyByTag(taggedComplex,
                {
                    rectangular: imgPartRectangular,
                    polar: imgPartPolar
                });

const magnitude = taggedComplex =>
    applyByTag(taggedComplex,
        {
            rectangular: magnitudeRectangular,
            polar: magnitudePolar
        });

const angle = taggedComplex =>
    applyByTag(taggedComplex,
        {
            rectangular: angleRectangular,
            polar: anglePolar
        });

module.exports = {
    realPart,
    imgPart,
    magnitude,
    angle,
    makeRectangular,
    makePolar
}
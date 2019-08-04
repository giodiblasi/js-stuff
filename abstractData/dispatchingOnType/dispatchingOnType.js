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
const {RECTANGULAR, POLAR} = require('./symbols');

const applyByTag = (taggedComplex, methods) => {
    const typeTag = tag.getTypeTag(taggedComplex);
    const complex = tag.getContent(taggedComplex);
    const selectedMethod = methods
        .filter(taggeMethod=>tag.getTypeTag(taggeMethod) == typeTag)
        .map(taggeMethod=>tag.getContent(taggeMethod))[0]
    return selectedMethod(complex);
}

const realPart = taggedComplex =>
    applyByTag(taggedComplex,[
        tag.attachTag(RECTANGULAR, realPartRectangular),
        tag.attachTag(POLAR, realPartPolar)]);

const imgPart = taggedComplex =>
    applyByTag(taggedComplex,[
        tag.attachTag(RECTANGULAR, imgPartRectangular),
        tag.attachTag(POLAR, imgPartPolar)]);
    

const magnitude = taggedComplex =>
    applyByTag(taggedComplex,[
        tag.attachTag(RECTANGULAR, magnitudeRectangular),
        tag.attachTag(POLAR, magnitudePolar)]);
    
const angle = taggedComplex =>
    applyByTag(taggedComplex,[
        tag.attachTag(RECTANGULAR, angleRectangular),
        tag.attachTag(POLAR, anglePolar)]);

module.exports = {
    realPart,
    imgPart,
    magnitude,
    angle,
    makeRectangular,
    makePolar
}
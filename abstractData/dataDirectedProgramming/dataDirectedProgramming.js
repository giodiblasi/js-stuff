const tag = require('../tag');
const complexForms = require('./complexForms');

const install = () => {
    const dataDirectedTable = complexForms.install({});
    const getMethodsByTag = (taggedData) => dataDirectedTable[tag.getTypeTag(taggedData)];
    return {
        realPart: taggedComplex => getMethodsByTag(taggedComplex).realPart(tag.getContent(taggedComplex)),
        imgPart: taggedComplex => getMethodsByTag(taggedComplex).imgPart(tag.getContent(taggedComplex)),
        magnitude: taggedComplex => getMethodsByTag(taggedComplex).magnitude(tag.getContent(taggedComplex)),
        angle: taggedComplex => getMethodsByTag(taggedComplex).angle(tag.getContent(taggedComplex)),
        makeRectangular: dataDirectedTable['rectangular'].make,
        makePolar:  dataDirectedTable['polar'].make
    }
};


module.exports = install();

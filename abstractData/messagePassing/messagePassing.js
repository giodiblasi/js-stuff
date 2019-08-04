const tag = require('../tag');
const symbols = require('./symbols');
const complexForms = require('./complexForms');

const genericApply = (complex, method) => complex(method);

module.exports = {
    realPart: taggedComplex => genericApply(taggedComplex, symbols.REAL_PART),
    imgPart: taggedComplex => genericApply(taggedComplex, symbols.IMG_PART),
    magnitude: taggedComplex => genericApply(taggedComplex, symbols.MAGNITUDE),
    angle: taggedComplex => genericApply(taggedComplex, symbols.ANGLE),
    makeRectangular: complexForms.makeRectangular,
    makePolar:  complexForms.makePolar
};

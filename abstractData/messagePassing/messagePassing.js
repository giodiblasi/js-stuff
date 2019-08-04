const tag = require('../tag');
const complexForms = require('./complexForms');

const genericApply = (complex, method) => complex(method);

module.exports = {
    realPart: taggedComplex => genericApply(taggedComplex, 'realPart'),
    imgPart: taggedComplex => genericApply(taggedComplex, 'imgPart'),
    magnitude: taggedComplex => genericApply(taggedComplex, 'magnitude'),
    angle: taggedComplex =>{console.log('angle'); return genericApply(taggedComplex, 'angle')},
    makeRectangular: complexForms.makeRectangular,
    makePolar:  complexForms.makePolar
};

const tag = require('../tag');
const symbols = require('./symbols')
const complexForms = require('./complexForms');

const install = () => {
    const dataDirectedTable = complexForms.install({});
    const genericApply = (taggedData, method) => {
        const typeTag = tag.getTypeTag(taggedData);
        const content = tag.getContent(taggedData);
        return dataDirectedTable[typeTag][method](content);
    }
    
    return {
        realPart: taggedComplex => genericApply(taggedComplex, symbols.REAL_PART),
        imgPart: taggedComplex => genericApply(taggedComplex, symbols.IMG_PART),
        magnitude: taggedComplex => genericApply(taggedComplex, symbols.MAGNITUDE),
        angle: taggedComplex => genericApply(taggedComplex, symbols.ANGLE),
        makeRectangular: dataDirectedTable[symbols.RECTANGULAR][symbols.MAKE],
        makePolar:  dataDirectedTable[symbols.POLAR][symbols.MAKE]
    }
};


module.exports = install();

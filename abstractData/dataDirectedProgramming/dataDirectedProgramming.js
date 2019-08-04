const tag = require('../tag');
const complexForms = require('./complexForms');

const install = () => {
    const dataDirectedTable = complexForms.install({});
    const genericApply = (taggedData, method) => {
        const typeTag = tag.getTypeTag(taggedData);
        const content = tag.getContent(taggedData);
        return dataDirectedTable[typeTag][method](content);
    }
    
    return {
        realPart: taggedComplex => genericApply(taggedComplex, 'realPart'),
        imgPart: taggedComplex => genericApply(taggedComplex, 'imgPart'),
        magnitude: taggedComplex => genericApply(taggedComplex, 'magnitude'),
        angle: taggedComplex => genericApply(taggedComplex, 'angle'),
        makeRectangular: dataDirectedTable['rectangular']['make'],
        makePolar:  dataDirectedTable['polar']['make']
    }
};


module.exports = install();

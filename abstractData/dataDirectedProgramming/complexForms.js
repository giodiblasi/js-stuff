const tag = require('../tag.js');
const symbols = require('./symbols')
//Rectangular Form
const makeRectangular = (x,y) => tag.attachTag(symbols.RECTANGULAR,{ x, y });

const realPartRectangular = complex => complex.x;
const imgPartRectangular = complex => complex.y;

const magnitudeRectangular = complex =>
    (Math.sqrt(
        Math.pow(realPartRectangular(complex),2) +
        Math.pow(imgPartRectangular(complex),2)));

const angleRectangular = complex =>
    Math.atan(
        imgPartRectangular(complex) /
        realPartRectangular(complex));


//Polar Form
const makePolar = (r,A) => tag.attachTag(symbols.POLAR, { r, A });

const magnitudePolar = complex => complex.r;
const anglePolar = complex => complex.A;

const realPartPolar = complex => magnitudePolar(complex) * Math.cos(anglePolar(complex));
const imgPartPolar = complex => magnitudePolar(complex) * Math.sin(anglePolar(complex));

const install = table => {
    var newTable= {...table};
    
    newTable[symbols.RECTANGULAR]={};
    newTable[symbols.RECTANGULAR][symbols.REAL_PART] = realPartRectangular;
    newTable[symbols.RECTANGULAR][symbols.IMG_PART] = imgPartRectangular;
    newTable[symbols.RECTANGULAR][symbols.ANGLE] = angleRectangular;
    newTable[symbols.RECTANGULAR][symbols.MAGNITUDE] = magnitudeRectangular;
    newTable[symbols.RECTANGULAR][symbols.MAKE] = makeRectangular;

    newTable[symbols.POLAR]={}
    newTable[symbols.POLAR][symbols.REAL_PART] = realPartPolar;
    newTable[symbols.POLAR][symbols.IMG_PART] = imgPartPolar;
    newTable[symbols.POLAR][symbols.ANGLE] = anglePolar;
    newTable[symbols.POLAR][symbols.MAGNITUDE] = magnitudePolar;
    newTable[symbols.POLAR][symbols.MAKE] = makePolar;
    return newTable;
};
    
module.exports = {install};


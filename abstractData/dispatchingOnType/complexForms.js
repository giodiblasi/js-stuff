const tag = require('../tag.js');

//Rectangular Form
const makeRectangular = (x,y) => tag.attachTag('rectangular',{ x, y });

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
const makePolar = (r,A) => tag.attachTag('polar',{ r, A });

const magnitudePolar = complex => complex.r;
const anglePolar = complex => complex.A;

const realPartPolar = complex => magnitudePolar(complex) * Math.cos(anglePolar(complex));
const imgPartPolar = complex => magnitudePolar(complex) * Math.sin(anglePolar(complex));


module.exports = {
    makeRectangular,
    realPartRectangular,
    imgPartRectangular,
    magnitudeRectangular,
    angleRectangular,
    makePolar,
    realPartPolar,
    imgPartPolar,
    magnitudePolar,
    anglePolar
};


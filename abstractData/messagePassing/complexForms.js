const symbols = require('./symbols');
//Rectangular Form

const magnitudeRectangular = (x, y) => Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

const angleRectangular = (x,y) => Math.atan(y / x);

const makeRectangular = (x,y) => op => {
    switch(op){
        case symbols.REAL_PART: return x; 
        case symbols.IMG_PART: return y;
        case symbols.ANGLE: return angleRectangular(x, y);
        case symbols.MAGNITUDE: return magnitudeRectangular(x,y);
    }
}


//Polar Form
const realPartPolar = (r,A) => r * Math.cos(A);
const imgPartPolar = (r,A) => r * Math.sin(A);

const makePolar = (r,A) => op => {
    switch(op){
        case symbols.REAL_PART: return realPartPolar(r,A); 
        case symbols.IMG_PART: return imgPartPolar(r,A);
        case symbols.ANGLE:  return A;
        case symbols.MAGNITUDE: return r;
    }
}

module.exports = {makePolar, makeRectangular};


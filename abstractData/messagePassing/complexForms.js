//Rectangular Form

const magnitudeRectangular = (x, y) => Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

const angleRectangular = (x,y) => Math.atan(y / x);

const makeRectangular = (x,y) => op => {
    console.log('craated rect')
    switch(op){
        case 'realPart': return x; 
        case 'imgPart': return y;
        case 'angle': console.log("angle rectangular"); return angleRectangular(x, y);
        case 'magnitude': return magnitudeRectangular(x,y);
    }
}


//Polar Form
const realPartPolar = (r,A) => r * Math.cos(A);
const imgPartPolar = (r,A) => r * Math.sin(A);

const makePolar = (r,A) => op => {
    console.log('craated polar')
    switch(op){
        case 'realPart': return realPartPolar(r,A); 
        case 'imgPart': return imgPartPolar(r,A);
        case 'angle':  console.log("angle polar"); return A;
        case 'magnitude': return r;
    }
}

module.exports = {makePolar, makeRectangular};


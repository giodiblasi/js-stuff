/* global describe it */
const assert = require('chai').assert;
const thisStuff = require('../thisStuff');
global.manName = 'Joe';

describe('---this binding test---', () => {
    it('object this', () => {
        man = thisStuff.getMan('Billy');
        assert.equal('Billy', man.getName());
    });

    it('apply this', () => {
         man = thisStuff.getMan('Billy');
         that = {
             manName: 'Peter'
         }
        assert.equal('Peter', man.getName.apply(that));
    });

     it('arrow function is bound to global context',function(){
         man = thisStuff.getMan('Billy');
         assert.equal(undefined, man.getNameLambda());
     });
});

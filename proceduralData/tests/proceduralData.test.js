/* global describe it */
const assert = require('chai').assert;
const user = require('../proceduralData.js');

describe('---Procedural Data  Representation test---', () => {
    it('getter methods', () => {
        const myUser = user.makeUser('billy', 23);
        assert.equal('billy', user.getName(myUser));
        assert.equal(23, user.getAge(myUser));
    });

    it('setter methods', () => {
        const myUser = user.makeUser('billy', 23);
        let adultUser = user.setAge(myUser, 34);
        adultUser = user.incAge(adultUser);
        assert.equal(23, user.getAge(myUser));
        assert.equal(35, user.getAge(adultUser));
     }); 
});

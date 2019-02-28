/* global describe it */
const assert = require('chai').assert;
const functionalConstructor = require('../functionalConstructor');
const user = functionalConstructor.user;
const superman = functionalConstructor.superman;

describe('---Functional Constructor test---', () => {
    it('private methods should not be accessible', () => {
        const myUser = user('billy');
        assert.equal(undefined, myUser.sayHello);
    });

    it('public methods should be accessible', () => {
        const myUser = user('billy');
        assert.equal("Hi! I'm billy", myUser.getName());
     });
    
    it('private methods should be accessible by child object', () => {
        const myUser= superman('billy');
        assert.equal("Hi! I can fly!!!", myUser.fly());
     });

});

/* global describe it */
const assert = require('chai').assert;
const promoteToManager = require('../mixinInheritance').promoteToManager;
const e = require('../factoryFunctionInheritance');

describe('---mixin Employee example---', () => {
  it('test that manager has employee behavior', () => {
    const manager = promoteToManager(e.getCommissionedEmployee());
    assert.equal(manager.calculatePay(), 10);
  });
  it('test that manager specific behavior', () => {
    const manager = promoteToManager(e.getCommissionedEmployee());
    assert.equal(manager.addEmployees(2).getEmployees(), 2);
  });
});

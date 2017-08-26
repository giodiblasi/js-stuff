/* global describe it */
const assert = require('chai').assert;
const { promoteToManager, promoteToDeveloper } = require('../mixinInheritance');
const e = require('../factoryFunctionInheritance');

const compose = (...fns) => value => fns.reduceRight((a, v) => v(a), value);

describe('---mixin Employee example---', () => {
  it('test that manager has employee behavior', () => {
    const manager = promoteToManager(e.getCommissionedEmployee());
    assert.equal(manager.calculatePay(), 10);
  });
  it('test that manager specific behavior', () => {
    const manager = promoteToManager(e.getCommissionedEmployee());
    assert.equal(manager.addEmployees(2).getEmployees(), 2);
  });

  it('multiple inheritance', () => {
    const managerDev = compose(promoteToManager, promoteToDeveloper)(e.getCommissionedEmployee());
    managerDev
      .assignToProject('The Best Project')
      .assignToProject('Other Project')
      .addEmployees(3);

    assert.equal(managerDev.getEmployees(), 3);
    assert.deepEqual(managerDev.getProjects(), ['The Best Project', 'Other Project']);
  });
});

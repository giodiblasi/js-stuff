/* global describe it */
const assert = require('chai').assert;
const { withFlyingPower, withLaserEyes } = require('../superHero');

const compose = (...fns) => value => fns.reduceRight((a, v) => v(a), value);

describe('---mixin super hero example---', () => {
  it('test flying power', () => {
    const flyingMan = withFlyingPower({ name: 'pippo' }).fly();
    assert.equal(flyingMan.isFlying(), true);
  });
  it('test laser eyes', () => {
    const flyingMan = withLaserEyes({ name: 'pippo' }).turnLaserOn();
    assert.equal(flyingMan.isLaserOn(), true);
  });

  it('test all powers', () => {
    const superHero = compose(
      withFlyingPower,
      withLaserEyes)({ name: 'pippo' });

    superHero.fly().turnLaserOn();

    assert.equal(superHero.isFlying(), true);
    assert.deepEqual(superHero.isLaserOn(), true);
  });
});

/* global describe it */
const assert = require('chai').assert;
const bucket = require('../waterBucket');

const compose = (...fns) => value => fns.reduceRight((a, v) => v(a), value);

describe('---water bucket: data type composition---', () => {
  it('add water to bucket', () => {
    const waterBucket = bucket({ capacity: 10, content: 5 });
    assert.equal(waterBucket, 5);
  });

  it('water overflow', () => {
    const waterBucket = bucket({ capacity: 10, content: 15 });
    assert.equal(waterBucket, 10);
  });

  it('water pour', () => {
    const waterBucket = compose(
      bucket({ capacity: 20, content: 5 }),
      bucket({ capacity: 20, content: 8 }))(bucket());
    assert.equal(waterBucket, 13);
  });

  it('water pour ovewrflow', () => {
    const waterBucket = compose(
      bucket({ capacity: 10, content: 5 }),
      bucket({ capacity: 20, content: 8 }))(bucket());
    assert.equal(waterBucket, 10);
  });

  it('water filling', () => {
    let waterBucket = bucket({ capacity: 10, content: 5 });
    waterBucket = waterBucket.fill(1);
    assert.equal(waterBucket.valueOf(), 6);
  });

  it('water filling and then pour', () => {
    const waterBucket = compose(
      bucket({ capacity: 20, content: 5 }).fill(1),
      bucket({ capacity: 20, content: 8 }))(bucket());
    assert.equal(waterBucket.valueOf(), 14);
  });

  it('water filling and then pour and overflow', () => {
    const waterBucket = compose(
      bucket({ capacity: 20, content: 5 }).fill(1),
      bucket({ capacity: 20, content: 8 }).fill(10))(bucket());
    assert.equal(waterBucket.valueOf(), 20);
  });

});

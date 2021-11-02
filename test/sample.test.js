const { sum } = require('../src/sample');

describe('suite', () => {
  it('Success: sum', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('Fail: should be true', () => {
    expect(sum(1, 2)).toBe(1);
  });
});

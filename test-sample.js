const { describe, it, expect } = require('./mini-test-lib');

describe('suite', () => {
  it('Success: should be true', () => {
    expect(2 > 1).toBe(true);
  });

  it('Fail: should be true', () => {
    expect(2 === 1).toBe(true);
  });
});

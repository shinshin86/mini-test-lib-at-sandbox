const { describe, it, expect } = require('../mini-test-lib');

describe('Sutie', () => {
  it('toBe', () => {
    expect(1 + 2).toBe(3);
  });

  it('toByTruthy', () => {
    expect(true).toBeTruthy();
  });

  it('toBeFalsy', () => {
    expect(false).toBeFalsy();
  });
});

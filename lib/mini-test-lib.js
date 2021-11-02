const changeTestTitleColor = () => console.log('\x1b[36m');
const changeSuccessColor = () => console.log('\x1b[32m');
const changeFailColor = () => console.log('\x1b[31m');
const resetColor = () => console.log('\x1b[0m');

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual === expected) {
        changeSuccessColor();
        console.log('Succeeded');
      } else {
        changeFailColor();
        throw new Error(`Failed! Actual: ${actual}, Expected: ${expected}`);
      }
    },
    toBeTruthy() {
      if (actual) {
        changeSuccessColor();
        console.log('Succeeded');
      } else {
        changeFailColor();
        throw new Error(
          `Failed! Expected value to be truthy but got ${actual}`
        );
      }
    },
  };
};

const it = (testName, fn) => {
  changeTestTitleColor();
  console.log(`Test name: ${testName}`);

  try {
    fn();
  } catch (err) {
    console.log(err);
    throw new Error('Test failed');
  }
};

const describe = (suiteName, fn) => {
  changeTestTitleColor();
  console.log(`Test suite name: ${suiteName}`);

  try {
    fn();
  } catch (err) {
    changeFailColor();

    console.log(err.message);

    resetColor();
  }
};

module.exports = {
  describe,
  it,
  expect,
};

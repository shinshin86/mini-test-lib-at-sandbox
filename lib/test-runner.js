const path = require('path');
const fs = require('fs');
const { describe, it, expect } = require('./mini-test-lib');
const testDir = path.join(process.cwd(), 'test');
const testFilePath = path.join(testDir, 'sample.test.js');

const run = async () => {
  try {
    const code = await fs.promises.readFile(testFilePath, 'utf8');
    eval(code);
  } catch (err) {
    console.log('Error');
    console.log(err.message);
  }
};

(async () => {
  await run();
})();

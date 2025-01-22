import * as path from 'path';
import Mocha from 'mocha';
import * as glob from 'glob';

export async function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'bdd',
    color: true,
    timeout: 10000
  });

  const testsRoot = path.resolve(__dirname);
  const files = await glob.glob('**/*.test.js', { cwd: testsRoot });

  // Add files to the test suite
  files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

  try {
    return new Promise<void>((resolve, reject) => {
      // Run the mocha test
      mocha.run((failures: number) => {
        if (failures > 0) {
          reject(new Error(`${failures} tests failed.`));
        } else {
          resolve();
        }
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
} 
import 'mocha';
import { assert } from 'chai';

import { Sleep } from '../../src/sleep';

describe('Sleep class test', () => {
  it('sleep should be a function', () => {
    assert.isFunction(Sleep.sleep);
  });

  it('createSleeper should be a function', () => {
    assert.isFunction(Sleep.createSleeper);
  });

  it('should sleep one second', async () => {
    let startMs = new Date().getTime();
    await Sleep.sleep(1000);
    let endMs = new Date().getTime();
    assert.isAbove(endMs, startMs + 999);
    assert.isBelow(endMs, startMs + 1050); //50 ms as uncertainity
    console.log(`Sleeping one second took ${endMs - startMs} ms`);
  });
});


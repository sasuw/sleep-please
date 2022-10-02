import 'mocha';
import { assert } from 'chai';

import Sleep from '../../src/index';

describe('NPM Package export test', () => {
  it('should be a function', () => {
    assert.isFunction(Sleep);
  });

  it('should have a sleep property', () => {
    assert.property(Sleep, 'sleep');
  });
});


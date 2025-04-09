import { assert } from 'chai';
import { Sleep } from '../../src/sleep';

describe('Sleep class basic test', () => {
  it('sleep should be a function', () => {
    assert.isFunction(Sleep.sleep);
  });

  it('createSleeper should be a function', () => {
    assert.isFunction(Sleep.createSleeper);
  });
});


describe('Sleep class functionality tests', () => {
  describe('sleep method', () => {
    it('should resolve after specified duration', async () => {
      const start = Date.now();
      await Sleep.sleep(100);
      const duration = Date.now() - start;
      
      assert.isTrue(
        duration >= 100 && duration <= 150, 
        `Expected sleep duration between 100-150ms, got ${duration}ms`
      );
    });

    it('should handle zero duration', async () => {
      const start = Date.now();
      await Sleep.sleep(0);
      const duration = Date.now() - start;
      
      assert.isBelow(duration, 50);
    });

    it('should throw for negative duration', () => {
      assert.throws(
        () => Sleep.sleep(-100),
        Error,
        'Sleep duration must be non-negative'
      );
    });

    it('should throw for non-finite numbers', () => {
      assert.throws(
        () => Sleep.sleep(NaN),
        TypeError,
        'Sleep duration must be a finite number'
      );

      assert.throws(
        () => Sleep.sleep(Infinity),
        TypeError,
        'Sleep duration must be a finite number'
      );
    });
  });

  describe('createSleeper method', () => {
    it('should create a reusable sleep function', async () => {
      const sleeper = Sleep.createSleeper(100);
      
      const start = Date.now();
      await sleeper();
      const duration = Date.now() - start;
      
      assert.isTrue(
        duration >= 100 && duration <= 150, 
        `Expected sleep duration between 100-150ms, got ${duration}ms`
      );
    });

    it('should work multiple times', async () => {
      const sleeper = Sleep.createSleeper(50);
      
      const start = Date.now();
      await sleeper();
      await sleeper();
      const duration = Date.now() - start;
      
      assert.isTrue(
        duration >= 100 && duration <= 150, 
        `Expected total sleep duration between 100-150ms, got ${duration}ms`
      );
    });
  });
});
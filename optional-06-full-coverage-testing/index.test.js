import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum should return the correct sum for valid positive numbers', () => {
    assert.strictEqual(sum(3, 4), 7, '3 + 4 should equal 7');
    assert.strictEqual(sum(0, 5), 5, '0 + 5 should equal 5');
    assert.strictEqual(sum(10, 0), 10, '10 + 0 should equal 10');
  });
  
  test('sum should return 0 if any argument is not a number', () => {
    assert.strictEqual(sum('3', 4), 0, '"3" + 4 should return 0');
    assert.strictEqual(sum(3, '4'), 0, '3 + "4" should return 0');
    assert.strictEqual(sum(true, false), 0, 'true + false should return 0');
    assert.strictEqual(sum(null, undefined), 0, 'null + undefined should return 0');
    assert.strictEqual(sum([], {}), 0, '[] + {} should return 0');
  });
  
  test('sum should return 0 if any argument is negative', () => {
    assert.strictEqual(sum(-3, 4), 0, '-3 + 4 should return 0');
    assert.strictEqual(sum(3, -4), 0, '3 + -4 should return 0');
    assert.strictEqual(sum(-3, -4), 0, '-3 + -4 should return 0');
  });
  
  test('sum should return 0 for edge cases of zero or no arguments', () => {
    assert.strictEqual(sum(), 0, 'No arguments should return 0');
    assert.strictEqual(sum(0), 0, 'Only one argument should return 0');
  });

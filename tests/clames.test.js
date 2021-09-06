const clames = require('../src');

test('keeps object keys with truthy values', () => {
  expect(clames({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 })).toBe(
    'a f'
  );
});

test('joins arrays of class names and ignores falsy values', () => {
  expect(clames('a', 0, null, undefined, true, 1, 'b')).toBe('a 1 b');
});

test('supports heterogenous arguments', () => {
  expect(clames({ a: true }, 'b', 0)).toBe('a b');
});

test('should be trimmed', () => {
  expect(clames('', 'b', {}, '')).toBe('b');
});

test('returns an empty string for an empty configuration', () => {
  expect(clames({})).toBe('');
});

test('supports an array of class names', () => {
  expect(clames(['a', 'b'])).toBe('a b');
});

test('joins array arguments with string arguments', () => {
  expect(clames(['a', 'b'], 'c')).toBe('a b c');
  expect(clames('c', ['a', 'b'])).toBe('c a b');
});

test('handles multiple array arguments', () => {
  expect(clames(['a', 'b'], ['c', 'd'])).toBe('a b c d');
});

test('handles arrays that include truthy and falsy values', () => {
  expect(clames(['a', 0, null, undefined, false, true, 'b'])).toBe('a b');
});

test('handles arrays that include arrays', () => {
  expect(clames(['a', ['b', 'c']])).toBe('a b c');
});

test('handles arrays that include objects', () => {
  expect(clames(['a', { b: true, c: false }])).toBe('a b');
});

test('handles deep array recursion', () => {
  expect(clames(['a', ['b', ['c', { d: true }]]])).toBe('a b c d');
});

test('handles arrays that are empty', () => {
  expect(clames('a', [])).toBe('a');
});

test('handles nested arrays that have empty nested arrays', () => {
  expect(clames('a', [[]])).toBe('a');
});

test('handles all types of truthy and falsy property values as expected', () => {
  expect(
    clames({
      // falsy:
      null: null,
      emptyString: '',
      noNumber: NaN,
      zero: 0,
      negativeZero: -0,
      false: false,
      undefined: undefined,

      // truthy (literally anything else):
      nonEmptyString: 'foobar',
      whitespace: ' ',
      function: Object.prototype.toString,
      emptyObject: {},
      nonEmptyObject: { a: 1, b: 2 },
      emptyList: [],
      nonEmptyList: [1, 2, 3],
      greaterZero: 1,
    })
  ).toBe(
    'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero'
  );
});

/* test('handles duplicates', () => {
  expect(
    clames('f', { a: true, b: false, c: 0, d: null, e: undefined, f: 1 }, 'a')
  ).toBe('f a');
  expect(clames(['a', { a: true }, [{ a: true }]])).toBe('a a a');
  expect(clames(['a', ['b', ['c', { b: true }]]])).toBe('a b c');
  expect(clames(['a', 0, null, undefined, false, { ab: true }, 'ab'])).toBe(
    'a ab'
  );
}); */

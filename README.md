# clames

A blazing fast, simple, and framework-agnostic JavaScript utility for conditionally building `className` strings.

## Install

### via npm:

```bash
npm install clames
```

### or yarn:

```bash
yard add clames
```

# Usage

### Import:

```js
import clames from 'clames';
// OR
const clames = require('clames');
```

### Strings and numbers

```js
clames('foo', 42, 'bar'); // => 'foo 42 bar'
clames('foo bar', 'baz qux', 1); // => 'foo bar baz qux 1'
```

### Booleans

```js
clames(true && 'foo', 0 && 'bar'); // => 'foo'
clames({ baz: true, qux: false, corge: 'hello' }); // => 'baz corge'
```

### Objects

```js
clames({ 'foo-bar': true }); // => 'foo-bar'
clames({ 'foo-bar': false }); // => ''
clames({ foo: true, bar: false, baz: 0, qux: null, quux: undefined, quuz: 1 }); // => 'foo quuz'
clames({ foo: true }, 'bar', 0)); // => 'foo bar'
```

### Arrays

```js
clames(['foo', 0, null, undefined, false, true, 'baz']); // => 'foo baz'
clames(42, ['foo', 'bar'], 'baz'); // => '42 foo bar baz'
clames(['foo', 'bar'], ['baz', 'qux']); // => 'foo bar baz qux'
```

### Functions

```js
const isTrue = input => {
  return input;
};

clames({
  foo: isTrue('hello'),
  bar: isTrue(''),
  baz: isTrue(2),
  qux: isTrue(undefined),
}); // => 'foo baz'
```

### More use cases

```js
// trims unused classes
clames('', 'foo', {}, '')); // => 'foo'

// supports deep recursion
clames(['foo', ['bar', ['baz', { qux: true }]]])); // => 'foo bar baz qux'

// example with all of the features included
clames('foo', [1 && 'bar', undefined { baz: false, qux: null }, {}, ['quux', ['quuz']]], 'corge'); // => 'foo bar quux quuz corge'
```

### Automatically removes duplicate class names

```js
clames('foo', 'foo', 'bar'); // => 'foo bar'
clames('foo', { bar: true, baz: false, qux: 0, foo: 1 }, true && 'foo', 'bar'); // => 'foo bar'
```

### Dynamic class names

Construct class names based on the value of variables:

```js
let buttonType = 'primary';
clames({ [`button-${buttonType}`]: true }); // => 'button-primary'
```

### Usage with React

The following code is an example of conditionally building class names in React using `if statements`:

```jsx
const Button = ({ label }) => {
  const [isPressed, setIsPressed] = useState(false);

  let btnClass = 'btn';
  if (isPressed) btnClass += ' btn-pressed';

  return (
    <button onClick={() => setIsPressed(!isPressed)} className={btnClass}>
      {label}
    </button>
  );
};
```

Instead of building class names using `if statements`, you can express the conditional classes more simply as an object and then pass that object as an argument to the `clames` function:

```jsx
import clames from 'clames';

const Button = ({ label }) => {
  const [isPressed, setIsPressed] = useState(false);

  let btnClass = clames({
    btn: true,
    'btn-pressed': isPressed,
  });

  return (
    <button onClick={() => setIsPressed(!isPressed)} className={btnClass}>
      {label}
    </button>
  );
};
```

## API

### clames(...input)

#### input: `string | number | boolean | object | array | undefined | null`

#### returns: `string`

## [MIT](LICENSE) License

Copyright © 2021, Muaz Sikiric [**(sikithedev)**](https://github.com/sikithedev)

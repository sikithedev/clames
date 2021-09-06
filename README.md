# clames

A blazing fast and simple JavaScript utility for conditionally building `className` strings.

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

```js
import clames from 'clames';
// OR
const clames = require('clames')

clames('foo', 'bar'); // => 'foo bar'
clames({ 'foo-bar': true }); // => 'foo-bar'
clames({ 'foo-bar': false }); // => ''
clames({ foo: true, bar: false, baz: 0, qux: null, quux: undefined, quuz: 1 }); // => 'foo quuz'
clames({ foo: true }, 'bar', 0)); // => 'foo bar'
clames('', 'foo', {}, '')); // => 'foo'
clames(['foo', 0, null, undefined, false, true, 'baz']); // => 'foo baz'
clames(['foo', 'bar'], ['baz', 'qux']); // => 'foo bar baz qux'
clames(['foo', ['bar', ['baz', { qux: true }]]])); // => 'foo bar baz qux'
clames('foo', [1 && 'bar', { baz: false, qux: null }, ['quux', ['quuz']]], 'corge'); // => 'foo bar quux quuz corge'
```

### Dynamic class names

```js
const buttonType = 'primary';
clames({ [`button-${buttonType}`]: true }); // => 'button-primary'
```

## API

### clames(...input)

#### input: `string | number | boolean | object | array | undefined | null`

#### returns: `string`

## [MIT](LICENSE) License

Copyright © 2021, Muaz Sikiric [(sikithedev)](https://github.com/sikithedev)

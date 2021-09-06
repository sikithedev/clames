# clames

A blazing fast and simple JavaScript utility for conditionally building `className` strings.

## Install

```
# via npm
npm install clames

# via yarn
yard add clames
```

# Usage

```js
import clames from 'clames';

clames({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 }); // => 'a f'

clames({ a: true }, 'b', 0)); // => 'a b'

clames('', 'b', {}, '')); // => 'b'

clames(['a', 0, null, undefined, false, true, 'b']); // => 'a b'

clames(['a', 'b'], ['c', 'd']); // => 'a b c d'

clames(['a', ['b', ['c', { d: true }]]])); // => 'a b c d'
```

## License

MIT © Muaz Sikiric (sikithedev)

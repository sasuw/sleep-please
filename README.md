# sleep-please

Pauses execution for a specified duration. 

You may ask: why? It's so trivial to implement yourself. Well, it's shorter to type `await Sleep.sleep(1000)` than 
`await new Promise(resolve => setTimeout(resolve, 1000));`. In the heat of the moment of debugging I don't want to
lose my flow by wasting seconds doing something trivial. Besides that, this project was an opportunity to 
to implement a NodeJS project working with both CommonJS and ESM support.

## What's with the name?

I like anagrams and it's almost a [phonetic](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet) [anagram](https://en.wikipedia.org/wiki/Anagram).
sleep: `/sliːp/`
please: `/pliːz/`

## Contents

[Features](#features)
[Installing](#installing)
[Usage examples](#usage-examples)
[API Documentation](#api-documentation)
[Compatibility](#compatibility)
[Performance](#performance)
[License](#license)
[Contributing](#contributing)


## Features

* CommonJS and ESM support
* Zero dependencies
* TypeScript types included
* Abort signal support

## Installing

```
npm install sleep-please
```

## Usage examples

### Including `sleep-please`

#### CommonJS

```typescript
const Sleep = require('sleep-please').default;
```

#### ESM

```typescript
import Sleep from 'sleep-please';
```

### Basic sleep

```typescript
import Sleep from 'sleep-please';

// Basic usage
await Sleep.sleep(2000); // Pause for 2 seconds

// Create a reusable sleep function
const shortSleep = Sleep.createSleeper(500);
await shortSleep(); // Pause for 500ms
```

### Abort signal

```typescript
import Sleep from 'sleep-please';

// Abortable sleep
const controller = new AbortController();

try {
await Sleep.sleep(5000, controller.signal);
} catch (error) {
// Sleep was aborted
console.log(error.message);
}

// Abort the sleep after 1 second
setTimeout(() => controller.abort(), 1000);
```

### Parallel sleeping

```typescript
import Sleep from 'sleep-please';

// Multiple parallel sleeps
await Promise.all([
  Sleep.sleep(1000),
  Sleep.sleep(1500),
  Sleep.sleep(2000)
]);
```

## API Documentation

https://sasuw.github.io/sleep-please/classes/Sleep.html

## Compatibility
- Node.js 14+
- CommonJS and ES Modules
- TypeScript support

## Performance
- Lightweight implementation
- Minimal overhead
- Uses native `setTimeout`

## License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Contributing

See Github project at https://github.com/sasuw/sleep-please/
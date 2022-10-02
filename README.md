# sleep-please

Sleeps (pauses execution) for a given amount of time.

## Features

* Can be used in both CommonJS and ESM projects
* No external dependencies

## Installing

```
npm install sleep-please
```

## Usage examples

### CommonJS

```
const Sleep = require('sleep-please').default;

(async () => {

  console.log('Starting to sleep');
  await Sleep.sleep(2000);
  console.log('Slept two seconds');

})();
```

### ESM

```
import Sleep from 'sleep-please';

(async () => {
  console.log('Starting to sleep');
  await Sleep.sleep(2000);
  console.log('Slept two seconds');

})();
```

### API Documentation

https://github.com/sasuw/sleep-please/docs/classes/Sleep.html

### License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

### Contributing

See Github project at https://github.com/sasuw/sleep-please/
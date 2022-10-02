# sleep-please

Sleeps (pauses execution) for a given amount of time.

## Features

* Can be used in both CommonJS and ESM projects
* No external dependencies

## Installing

```
npm install sleep-please
```

## Usage

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

### License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

### Contributing

See Github project at https://github.com/sasuw/sleep-please/
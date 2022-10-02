const replace = require('replace-in-file');

/**
 * Adds required ending to import statements
 */
const results = replace.sync({
    files: 'lib/**/*.mjs',
    from: /(import.*?['"].*?)(['"](?<![.]js['"])(?<![.]mjs['"]);)/g,
    to: '$1.mjs$2',
    countMatches: true,
  });
  
  console.log(results);
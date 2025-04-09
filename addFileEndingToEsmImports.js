import {replaceInFileSync} from 'replace-in-file'

/**
 * Adds required ending to import statements
 */

const options = {
  files: 'lib/**/*.mjs',
  from: /(import.*?['"].*?)(['"](?<![.]js['"])(?<![.]mjs['"]);)/g,
  to: '$1.mjs$2',
  countMatches: true,
}

try {
  const results = replaceInFileSync(options)
  console.log('replaceInFileSync results:', results)
}catch (error) {
  console.error('replaceInFileSync error:', error)
}
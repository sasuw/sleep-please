#!/bin/sh
find . -name '*.mjs' | xargs ./node_modules/replace-in-files-cli/cli.js --no-glob --regex '(import.*?['"'"'"].*?)(['"'"'"](?<![.]js['"'"'"])(?<![.]mjs['"'"'"]);)' --replacement '$1.mjs$2'
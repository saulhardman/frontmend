#!/usr/bin/env bash
echo "Running r.js optimizr..."
r.js -o js/build.js
echo "Completed. Adding into this commit..."
git add -A
echo "Added."
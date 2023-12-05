[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/fedeviotti/starwars-names-fv/release.yml?style=flat-square)](https://github.com/fedeviotti/starwars-names-fv/actions/workflows/release.yml)
[![GitHub release (with filter)](https://img.shields.io/github/v/release/fedeviotti/starwars-names-fv?style=flat-square)](https://github.com/fedeviotti/starwars-names-fv/releases)
[![npm](https://img.shields.io/npm/dm/starwars-names-fv?style=flat-square)](https://www.npmjs.com/package/starwars-names-fv)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# starwars-names-fv

## Features implemented and tools used
- [semantic-release](https://github.com/semantic-release/semantic-release) and [semantic-release-cli](https://github.com/semantic-release/cli) for release automation
- [commitizen](https://github.com/commitizen/cz-cli) for commit message format
- [github actions](https://docs.github.com/en/actions) as CI (replaced [travis](https://www.travis-ci.com/))
- [jest](https://jestjs.io/) for test and test coverage (replaced [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai) and [instanbul](https://istanbul.js.org/))
- [husky](https://typicode.github.io/husky/) for pre-commit hook (replaced [ghooks](https://www.npmjs.com/package/ghooks))
- [codecov](https://about.codecov.io/) for coverage report
- [shields](https://shields.io/) for badges
- ES6 support for source code (using type="module" in package.json)
- ES6 support for tests using [Jest native](https://jestjs.io/docs/ecmascript-modules) support, here is a stackoverflow [question](https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm) about it)
- TypeScript support for source code
- TypeScript support for tests using [@swc/jest](https://swc.rs/docs/usage/jest)

## Todos
- set coverage threshold with [jest](https://jestjs.io/docs/configuration#coveragethreshold-object) (optional)
- run tsc to generate types before build
- add a bundler, options are
  - [vite](https://vitejs.dev/)
  - [rollup](https://rollupjs.org/guide/en/)
  - [tsup](https://github.com/egoist/tsup): no because I need a node server
- add bundler visualized analysis with [vite bundler visualizer](https://www.npmjs.com/package/vite-bundle-visualizer)
  - check @swc/core and @swc-jest size compare to ts-jest

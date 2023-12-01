[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/fedeviotti/starwars-names-fv/release.yml?style=flat-square)](https://github.com/fedeviotti/starwars-names-fv/actions/workflows/release.yml)
[![GitHub release (with filter)](https://img.shields.io/github/v/release/fedeviotti/starwars-names-fv?style=flat-square)](https://github.com/fedeviotti/starwars-names-fv/releases)
[![npm](https://img.shields.io/npm/dm/starwars-names-fv?style=flat-square)](https://www.npmjs.com/package/starwars-names-fv)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# starwars-names-fv

## Tools used
- [semantic-release](https://github.com/semantic-release/semantic-release) and [semantic-release-cli](https://github.com/semantic-release/cli) for release automation
- [commitizen](https://github.com/commitizen/cz-cli) for commit message format
- [github actions](https://docs.github.com/en/actions) as CI (replaced [travis](https://www.travis-ci.com/))
- [jest](https://jestjs.io/) for test and test coverage (replaced [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai) and [instanbul](https://istanbul.js.org/))
- [husky](https://typicode.github.io/husky/) for pre-commit hook (replaced [ghooks](https://www.npmjs.com/package/ghooks))
- [codecov](https://about.codecov.io/) for coverage report (optional)
- [shields](https://shields.io/) for badges

## To do
- set coverage threshold with [jest](https://jestjs.io/docs/configuration#coveragethreshold-object) (optional)
- add coverage report with [codecov](https://about.codecov.io/) (optional)
- add ES6 support with [babel](https://babeljs.io/)

<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [XO][xo] plugin for [Fly][fly].

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [XO documentation][xo] to see the available options.

### Install

```a
npm install --save-dev fly-xo
```

### Example

```js
export default function* () {
  yield this.source('app/**/*.js').xo({
    semicolon": false,
    "space": 2,
    "overrides": [
      "files": "app/tests/*.js",
      "esnext": true,
      "space": false
    ]
  });
}
```

## License

MIT © [Luke Edwards][author]

[xo]:           https://github.com/sindresorhus/xo
[author]:       https://lukeed.com
[contributors]: https://github.com/lukeed/fly-xo/graphs/contributors
[releases]:     https://github.com/lukeed/fly-xo/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-xo
[npm-ver-link]: https://img.shields.io/npm/v/fly-xo.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-xo.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-xo
[travis-badge]: http://img.shields.io/travis/lukeed/fly-xo.svg?style=flat-square

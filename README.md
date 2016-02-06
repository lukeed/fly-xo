<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [XO](https://github.com/sindresorhus/xo) plugin for [Fly](https://www.github.com/flyjs/fly).

[![][fly-badge]](https://www.github.com/flyjs/fly)
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```a
npm install --save-dev fly-xo
```

## Usage

The `xo` task must be last function within your task.

```js
export default function* () {
  yield this.source('app/**/*.js').xo({
    semicolon: false,
    space: 2,
    overrides: [
      files: 'app/tests/*.js',
      esnext: true,
      space: false
    ]
  });
}
```

## API

### xo([options])

#### options

Read the [XO Config Options](https://github.com/sindresorhus/xo#config) for details. These can also be set within `package.json` file.

In the `flyfile.js`, you can specify the following option:

##### quiet

Type: `boolean`  
Default: `false`

Report errors only.

## License

MIT © [Luke Edwards](https://lukeed.com)

[releases]:     https://github.com/lukeed/fly-xo/releases
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-xo
[npm-ver-link]: https://img.shields.io/npm/v/fly-xo.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-xo.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-xo
[travis-badge]: http://img.shields.io/travis/lukeed/fly-xo.svg?style=flat-square

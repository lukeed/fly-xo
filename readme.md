# fly-xo [![][travis-badge]][travis-link] [![npm package][npm-ver-link]][npm-pkg-link]

> [XO](https://github.com/sindresorhus/xo) plugin for [Fly](https://www.github.com/flyjs/fly).

<!-- <div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div> -->


## Install

```a
npm install --save-dev fly-xo
```

## Usage

```js
export.default = function * () {
  yield this.source('scripts/**/*.js')
    .xo({
      semicolon: false
    })
    // ... 
    .target('dist');
}
```

## API

### xo(options)

Any options you pass in will override XO's default settings.

Read more about [configuring XO](https://github.com/sindresorhus/xo#config) for details.

#### options.quiet

Type: `boolean`<br>
Default: `false`

Report errors only.


## License

MIT © [Luke Edwards](https://lukeed.com)

[npm-pkg-link]: https://www.npmjs.org/package/fly-xo
[npm-ver-link]: https://img.shields.io/npm/v/fly-xo.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-xo
[travis-badge]: http://img.shields.io/travis/lukeed/fly-xo.svg?style=flat-square

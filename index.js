const xo = require('xo');
const assign = require('object-assign');

module.exports = function () {
  this.xo = function (opts) {
    opts = assign({quiet: false}, opts);
    const files = this._.globs;
    console.log( files, opts );
    return this;
  };
}

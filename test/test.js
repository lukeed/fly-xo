const xo = require('../');
const test = require('tape').test;
const join = require('path').join;

test('fly-xo', function (t) {
  const fly = {};
  xo.call(fly);
  t.ok(fly.xo !== undefined, 'add xo function to fly instance');
  t.end();
});

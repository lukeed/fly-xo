'use strict';

const join = require('path').join;
const test = require('tape').test;
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(dir, 'tmp');

test('fly-xo', t => {
	t.plan(3);

	const fly = new Fly({
		plugins: [{
			func: require('../')
		}],
		tasks: {
			a: function * () {
				yield this.source(`${dir}/*`).xo().target(tmp);
				t.pass('allow `xo` to be chainable');
				const arr = yield this.$.expand(`${tmp}/*`);
				t.equal(arr.length, 2, 'pass `xo` files on to `target()`');
				yield this.clear(tmp);
			}
		}
	});

	t.ok('xo' in fly, 'attach `xo` plugin to Fly');

	fly.start('a');
});

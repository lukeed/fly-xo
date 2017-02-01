'use strict';

const {join} = require('path');
const test = require('tape');
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(dir, 'tmp');

test('fly-xo', t => {
	t.plan(3);

	const fly = new Fly({
		plugins: [
			require('../'),
			require('fly-clear')
		],
		tasks: {
			* foo(f) {
				yield f.source(`${dir}/*`).xo().target(tmp);
				t.pass('allow `xo` to be chainable');
				const arr = yield f.$.expand(`${tmp}/*`);
				t.equal(arr.length, 2, 'pass `xo` files on to `target()`');
				yield f.clear(tmp);
			}
		}
	});

	t.ok('xo' in fly.plugins, 'attach `xo` plugin to Fly');

	fly.start('foo');
});

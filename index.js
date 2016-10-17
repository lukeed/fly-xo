'use strict';

const rel = require('path').relative;
const xo = require('xo');

module.exports = function () {
	this.plugin('xo', {every: 0, files: 0}, function * (globs, opts) {
		opts = Object.assign({quiet: false}, opts);

		const report = yield xo.lintFiles(globs, opts);

		// truncate project root from paths
		let results = report.results.map(obj => {
			obj.filePath = rel(this.root, obj.filePath);
			return obj;
		});

		// hide warnings
		if (opts.quiet) {
			results = xo.getErrorResults(results);
		}

		if (report.errorCount > 0 || report.warningCount > 0) {
			this.$.log(xo.getFormatter()(results));
		}

		if (report.errorCount > 0) {
			const num = results.filter(el => el.errorCount > 0).length;
			const end = (num > 1) ? 'files' : 'file';

			this.emit('plugin_error', {
				plugin: 'fly-xo',
				error: `XO found ${report.errorCount} errors in ${num} ${end}!`
			});
		}
	});
};

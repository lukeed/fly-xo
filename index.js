const xo = require('xo');
const path = require('path');
const assign = require('object-assign');

module.exports = function () {
  this.xo = function (opts) {
    opts = assign({quiet: false}, opts);
    const proj = this.root;

    return xo.lintFiles(this._.globs, opts).then(report => {
      // truncate project root from path
      let results = report.results.map(entry => {
        entry.filePath = path.relative(proj, entry.filePath);
        return entry;
      });

      if (opts.quiet) {
        results = xo.getErrorResults(results);
      }

      if (report.errorCount > 0 || report.warningCount > 0) {
        this.error('fly-xo: Code Style Errors \n', xo.getFormatter()(results));
      }
    });
  };
};

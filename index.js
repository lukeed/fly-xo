const xo = require('xo');
const path = require('path');
const assign = require('object-assign');

module.exports = function () {
  this.xo = function (opts) {
    opts = assign({quiet: false}, opts);
    const proj = this.root;

    return xo.lintFiles(this._.globs, opts).then(report => {
      // truncate project root from path
      var results = report.results.map(entry => {
        entry.filePath = path.relative(proj, entry.filePath);
        return entry;
      });

      // hide warnings
      if (opts.quiet) {
        results = xo.getErrorResults(results);
      }

      if (report.errorCount > 0 || report.warningCount > 0) {
        this.log(xo.getFormatter()(results));
      }

      if (report.errorCount > 0) {
        const end = (results.length > 1) ? 'files!' : 'file!';
        const num = results.filter(el => el.errorCount > 0).length;

        this.emit('plugin_error', {
          plugin: 'fly-xo',
          error: 'XO found '+ report.errorCount +' errors in '+ num +' '+end
        });
      }
    });
  };
};

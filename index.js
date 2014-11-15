'use strict';

var esTranspiler = require('broccoli-6to5-transpiler');

module.exports = {
  name: 'ember-cli-6to5',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.registry.add('js', {
      name: 'ember-cli-6to5',
      ext: 'js',
      toTree: function(tree) {
        return esTranspiler(tree, app.options.esTranspilerOptions);
      }
    });
  }
};

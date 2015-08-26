'use strict';

var path = require('path');
var BBPromise = require('bluebird');
var fs = BBPromise.promisifyAll(require('fs-extra'));

module.exports = function (directory) {
  var dir = (typeof directory === 'string' && directory) ? directory : '';
  var from = path.resolve(path.join(__dirname, './Vagrantfile'));
  var to = path.resolve(path.join(dir, './Vagrantfile'));

  return fs.copyAsync(from, to).catch(function (err) {
    console.error(err);
  });
};

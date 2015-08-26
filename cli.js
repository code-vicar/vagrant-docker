#!/usr/bin/env node

var cli = require('commander');
var path = require('path');
var BBPromise = require('bluebird');
var fs = BBPromise.promisifyAll(require('fs-extra'));
var pkg = require('./package.json');

cli
  .version(pkg.version)
  .description('Installs a docker provisioned vagrantfile in current (or target) directory')
  .option('-d, --directory <dir>', 'Target directory')
  .parse(process.argv);

var dir = (cli.directory) ? cli.directory : '';

fs.copyAsync('./Vagrantfile', path.resolve(path.join(dir, './Vagrantfile'))).catch(function (err) {
  console.error(err);
});

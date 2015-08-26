#!/usr/bin/env node

var cli = require('commander');
var path = require('path');
var BBPromise = require('bluebird');
var fs = BBPromise.promisifyAll(require('fs-extra'));

cli
  .version('0.0.1')
  .description('Installs a docker provisioned vagrantfile in current (or target) directory')
  .option('-d, --directory <dir>', 'Target directory')
  .parse(process.argv);

var dir = (cli.directory) ? cli.directory : '';

fs.copyAsync('./Vagrantfile', dir + '/Vagrantfile').catch(function (err) {
  console.error(err);
});

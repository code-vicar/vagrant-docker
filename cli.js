#!/usr/bin/env node

'use strict';

var vagrantDocker = require('./index.js');
var cli = require('commander');

var pkg = require('./package.json');

cli
  .version(pkg.version)
  .description('Installs a docker provisioned vagrantfile in current (or target) directory')
  .option('-d, --directory <dir>', 'Target directory')
  .parse(process.argv);

vagrantDocker(cli.directory);

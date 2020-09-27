#!/usr/bin/env node

const {
  scanNodeModules,
  trashNodeModules,
  deleteNodeModules
} = require('../lib/index');

const dirs = scanNodeModules(process.cwd());

if (process.argv.indexOf('--trash') !== -1) {
  trashNodeModules(dirs).then(() => {
    dirs.forEach((dirPath) => {
      console.log('Moved to trash: ' + dirPath.replace(process.cwd(), '.'));
    });
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else if (process.argv.indexOf('--delete') !== -1) {
  deleteNodeModules(dirs).then(() => {
    dirs.forEach((dirPath) => {
      console.log('Deleted: ' + dirPath.replace(process.cwd(), '.'));
    });
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else {
  dirs.forEach((dirPath) => {
    console.log(dirPath.replace(process.cwd(), '.'));
  });
}

const fs = require('fs');
const path = require('path');
const del = require('del');
const trash = require('trash');

function scanNodeModules(dir) {
  const dirs = [];
  const stat = fs.statSync(dir);

  if (stat.isDirectory()) {
    const entries = fs.readdirSync(dir);
    entries.forEach((name) => {
      const dirPath = path.resolve(dir, name);
      const dirStat = fs.statSync(dirPath);

      if (dirStat.isDirectory()) {
        if (name === 'node_modules') {
          dirs.push(dirPath);
        } else {
          scanNodeModules(dirPath).forEach((dirPath) => dirs.push(dirPath));
        }
      }
    });
  }

  return dirs;
}

function trashNodeModules(dirs) {
  return trash(dirs);
}

function deleteNodeModules(dirs) {
  return del(dirs);
}

exports.scanNodeModules = scanNodeModules;
exports.trashNodeModules = trashNodeModules;
exports.deleteNodeModules = deleteNodeModules;

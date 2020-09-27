# Trash node_modules

[![npm version](https://img.shields.io/npm/v/trash-node-modules.svg)](https://www.npmjs.com/package/trash-node-modules)
[![install size](https://packagephobia.now.sh/badge?p=trash-node-modules)](https://packagephobia.now.sh/result?p=trash-node-modules)
[![npm downloads](https://img.shields.io/npm/dm/trash-node-modules.svg)](http://npm-stat.com/charts.html?package=trash-node-modules)

A command line tool to move node_modules directory to trash recursively or delete node_modules directory recursively.

## Examples

```bash
# Display all the node_modules directories within the current working directory recursively
npx trash-node-modules

# Move all the node_modules directories within the current working directory to trash recursively
npx trash-node-modules --trash

# Delete all the node_modules directories within the current working directory recursively
npx trash-node-modules --delete
```

## License

[MIT](./LICENSE)
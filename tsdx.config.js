const styles = require('rollup-plugin-styles');
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(styles());
    return config; // always return a config.
  },
};

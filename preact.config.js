/* eslint-disable semi */
const path = require('path');

export default (config) => {
  config.resolve.alias = {
    src: path.resolve(__dirname, 'src'),
    ...config.resolve.alias
  };
};

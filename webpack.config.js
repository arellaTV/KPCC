const webpack = require('webpack');

const BUILD_DIR = `${__dirname}public`;
const APP_DIR = `${__dirname}client/src/App`;

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;

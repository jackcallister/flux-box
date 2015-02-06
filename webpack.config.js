module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: './dist/scripts/main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader!6to5-loader' },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  }
};

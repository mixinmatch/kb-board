const path = require('path')

module.exports = {
  entry: './App.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.s[ac]ss$/i, 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
      {
        test: /\.(svg|png)$/,
        loader: "file-loader",
      }
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

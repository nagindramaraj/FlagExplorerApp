const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/index.js', // the entry point for your app
  output: {
    path: path.resolve(__dirname, 'build'), // This ensures that the build is created in the 'build' directory
    filename: 'bundle.js', // Name of the output file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Other loaders can be added here as needed
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],
};

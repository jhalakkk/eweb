const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Regex to match JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile files
        },
      },
      // Add more loaders as needed
    ],
  },
  devServer: {
    static: './dist', // Serve static files from 'dist' directory
    setupMiddlewares: (middlewares, devServer) => {
      // Custom middleware setup can go here if needed
      return middlewares;
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
};

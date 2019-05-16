const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    plugins: [
    new Dotenv()
  ],
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        test: /\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }

}

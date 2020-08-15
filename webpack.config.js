const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(react-native))\//,
        use: {loader: 'babel-loader'},
      },
    ],
  },
  plugins: [new HtmlWebPackPlugin({template: './public/index.html'})],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@react-native-firebase/auth$': 'src/web-compat/firebase/auth.js',
      '@react-native-firebase/firestore$':
        'src/web-compat/firebase/firestore.js',
      'react-router-native$': path.resolve(
        __dirname,
        'src/web-compat/react-router.js',
      ),
    },
  },
};

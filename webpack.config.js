const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@api': path.resolve(__dirname, 'src/api/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.svg',
    }),
    new Dotenv({
      path: '.env',
    }),
  ],
};

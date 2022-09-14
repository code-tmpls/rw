const HTMLWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const webpackUtil = require( './config/webpack.utils.cjs' );

webpackUtil.setPackageInfo('PATCH'); // MAJOR, MINOR, PATCH

module.exports = {
  mode: 'development',
  performance: {
    hints: false,
   // maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'dist')
    },
    experiments: {
        outputModule: true,
    },
    resolve: {
        symlinks: false,
        alias: {
          'e-ui-react': Path.resolve(__dirname, 'src/index.js'),
          '@LibAdvancedTopics': Path.resolve(__dirname, 'src/AdvancedTopics'),
          '@LibCodeEditorsViewers': Path.resolve(__dirname, 'src/CodeEditorsViewers'),
          '@LibComponents': Path.resolve(__dirname, 'src/Components'),
          '@LibFeatures': Path.resolve(__dirname, 'src/Features'),
          '@LibFormElements': Path.resolve(__dirname, 'src/FormElements'),
          '@LibHeadersAndFooters': Path.resolve(__dirname, 'src/HeadersAndFooters'),
          '@LibLayout': Path.resolve(__dirname, 'src/Layout'),
          '@LibReadyMadeScreens': Path.resolve(__dirname, 'src/ReadyMadeScreens'),
          '@LibThemes': Path.resolve(__dirname, 'src/Themes'),
          '@LibUtils': Path.resolve(__dirname, 'src/Utils'),
          '@LibVisualization': Path.resolve(__dirname, 'src/Visualization'),
          // Needed when library is linked via `npm link` to app
        /** This is implemented when the React Hooks are not working under the library */
        react: Path.resolve("./node_modules/react"),
        filename:'main.js',
        publicPath: '/'
        }
   },
   devServer: { // Needed to make react-router-dom to work
    historyApiFallback: true
   },
   module:{
    rules:[
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [ "file-loader" ],
        },/*
        {
            test: /\.(woff|woff2|ttf)$/,
            use: [ "url-loader" ],
        }, */
        {
            test:/\.css$/,
            use: [ "style-loader", "css-loader" ]
        },
        {
            test:/\.scss$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
            test:/\.sass$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }]
        }
    ]
 }
};
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const Path = require('path');

require('./build-config/package-update.cjs');

module.exports = {
 mode: 'development',
 performance: {
    hints: false,
   // maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
 entry: {
    default: {     
        import: Path.resolve(__dirname, "src","default.js")
    }
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
 },
 plugins:[
  new HTMLWebpackPlugin({
    template: Path.resolve(__dirname, "public","index.html")
  })
 ],
 optimization:{
    splitChunks : { chunks: "all" }
 },
 resolve: {
    symlinks: false,
    alias: {
        'e-ui-react': Path.resolve(__dirname, 'src/default.js'),
        '@Assets': Path.resolve(__dirname, 'public/assets'),
        '@LibAdvancedTopics': Path.resolve(__dirname, 'src/Library/AdvancedTopics'),
        '@LibCodeEditorsViewers': Path.resolve(__dirname, 'src/Library/CodeEditorsViewers'),
        '@LibComponents': Path.resolve(__dirname, 'src/Library/Components'),
        '@LibFeatures': Path.resolve(__dirname, 'src/Library/Features'),
        '@LibFormElements': Path.resolve(__dirname, 'src/Library/FormElements'),
        '@LibHeadersAndFooters': Path.resolve(__dirname, 'src/Library/HeadersAndFooters'),
        '@LibLayout': Path.resolve(__dirname, 'src/Library/Layout'),
        '@LibReadyMadeScreens': Path.resolve(__dirname, 'src/Library/ReadyMadeScreens'),
        '@LibThemes': Path.resolve(__dirname, 'src/Library/Themes'),
        '@LibUtils': Path.resolve(__dirname, 'src/Library/Utils'),
        '@LibVisualization': Path.resolve(__dirname, 'src/Library/Visualization'),
        // Needed when library is linked via `npm link` to app
        /** This is implemented when the React Hooks are not working under the library */
        react: Path.resolve("./node_modules/react"),
        filename:'main.js',
        publicPath: '/'
    }
 },
 devServer: { // Needed to make react-router-dom to work
    historyApiFallback: true
 }
};
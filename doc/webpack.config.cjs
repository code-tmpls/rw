const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const Path = require('path');
const baseUrl = 'http://localhost:8080/';

module.exports = {
 mode: 'production',
 performance: {
    hints: false,
   // maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
 entry: {
    index: {
        dependOn: 'default',
        import: Path.resolve(__dirname, "src","index.js"),
    },
    default: {     
        import: Path.resolve(__dirname, "src","default.js")
    }
 },
 output: {
    path: Path.resolve(__dirname, 'dist/'),
    publicPath: baseUrl, 
    /* When we have URL Routes (react-router-dom), the  build is loading the scripts in Relative path -
     * To resolve it we used publicPath
     */ 
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
        },
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
        '@Lib': Path.resolve(__dirname, 'src/default.js'),
        '@Assets': Path.resolve(__dirname, 'public/assets'),
        '@LibAdvancedTopics': Path.resolve(__dirname, 'src/Library/AdvancedTopics'),
        '@LibCodeEditorsViewers': Path.resolve(__dirname, 'src/Library/CodeEditorsViewers'),
        '@LibComponents': Path.resolve(__dirname, 'src/Library/Components'),
        '@LibFeatures': Path.resolve(__dirname, 'src/Library/Features'),
        '@LibFormElements': Path.resolve(__dirname, 'src/Library/FormElements'),
        '@LibLayout': Path.resolve(__dirname, 'src/Library/Layout'),
        '@LibReadyMadeScreens': Path.resolve(__dirname, 'src/Library/ReadyMadeScreens'),
        '@LibThemes': Path.resolve(__dirname, 'src/Library/Themes'),
        '@LibUtils': Path.resolve(__dirname, 'src/Library/Utils'),
        '@LibVisualization': Path.resolve(__dirname, 'src/Library/Visualization'),
        '@DocConfig': Path.resolve(__dirname, 'src/Documentation/config'),
        '@DocCore': Path.resolve(__dirname, 'src/Documentation/templates'),
        '@DocAdvancedTopics': Path.resolve(__dirname, 'src/Documentation/templates/AdvancedTopics'),
        '@DocCodeEditorsViewers': Path.resolve(__dirname, 'src/Documentation/templates/CodeEditorsViewers'),
        '@DocComponents': Path.resolve(__dirname, 'src/Documentation/templates/Components'),
        '@DocFeatures': Path.resolve(__dirname, 'src/Documentation/templates/Features'),
        '@DocFormElements': Path.resolve(__dirname, 'src/Documentation/templates/FormElements'),
        '@DocLayout': Path.resolve(__dirname, 'src/Documentation/templates/Layout'),
        '@DocReadyMadeScreen': Path.resolve(__dirname, 'src/Documentation/templates/ReadyMadeScreen'),
        '@DocThemes': Path.resolve(__dirname, 'src/Documentation/templates/Themes'),
        '@DocVisualization': Path.resolve(__dirname, 'src/Documentation/templates/Visualization'),
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
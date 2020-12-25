const mix = require("laravel-mix");
const ASSET_PATH=process.env.ASSET_URL || '/';
// const path =require('path');
//webpack.mix.js
mix.setPublicPath('public');

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue",".ts" ,".json"],
        alias: {
            	"@": __dirname + "/resources/js"
        }
    }
	,output: {
        	chunkFilename: 'js/[name].js',
            path: __dirname+'/public',
			// publicPath:'public/'  //or use ASSET_PATH
     },
});

/* Prevent mix rendering loop incase if url error */
mix.options({
    processCssUrls: false
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
mix.sass("resources/sass/lite-green.scss",
"public/css");

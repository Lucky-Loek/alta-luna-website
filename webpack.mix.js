let mix = require('laravel-mix');

mix
    .copy('src/img', 'dist/img')
    .copy('src/index.html', 'dist/index.html')
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-*', 'dist/webfonts')

    .js('src/js/app.js', 'js')
    .sass('src/sass/app.scss', 'css').options({ processCssUrls: false })
    .setPublicPath('dist')
;

let mix = require('laravel-mix');

mix
    // Images
    .copy('src/img', 'dist/img')

    // HTML
    .copy('src/index.html', 'dist/index.html')
    .copy('src/tour.html', 'dist/tour.html')

    // Downloads
    .copy('src/presskit', 'dist/presskit')

    // Fonts
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-*', 'dist/webfonts')
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-*', 'dist/webfonts')

    // JavaScript
    .js('src/js/app.js', 'js')

    // CSS
    .sass('src/sass/app.scss', 'css').options({ processCssUrls: false })

    // Dist folder is public folder
    .setPublicPath('dist')
;

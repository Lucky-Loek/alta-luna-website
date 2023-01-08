let mix = require('laravel-mix');

mix
    // HTML
    .copy('src/index.html', 'dist/index.html')
    .copy('src/tour.html', 'dist/tour.html')

    // Fonts
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-*', 'dist/fonts')
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-*', 'dist/fonts')
    .copy('src/fonts/Plume-Free-Brush-Font.otf', 'dist/fonts')

    // JavaScript
    .js('src/js/app.js', 'js')

    // CSS
    .sass('src/sass/app.scss', 'css').options({ processCssUrls: false })

    // Dist folder is public folder
    .setPublicPath('dist')
;

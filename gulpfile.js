const { src, dest, watch, parallel, series } = require('gulp');
const browsersync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const minifySCSS = require('gulp-clean-css');
const minifyJs = require('gulp-uglify');
const notify = require('gulp-notify');
const nunjucksRender = require('gulp-nunjucks-render');

function transferImages() {
  return src('src/images/*.{webp,jpeg,png}').pipe(dest('dist/assets/images'));
}

function transferFonts() {
  return src('src/fonts/*.{eot,woff,woff2}').pipe(dest('dist/assets/fonts'));
}

function customPlumber(errorTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errorTitle || 'Error running Gulp',
      message: 'Error: <%= error.message %>',
      sound: 'Purr',
    }),
  });
}

function compileScss() {
  return src('src/scss/styles.scss')
    .pipe(customPlumber('Error Running Sass'))
    .pipe(sass())
    .pipe(minifySCSS())
    .pipe(dest('dist/assets/css'));
}

function minJs() {
  return src('src/js/*.js')
    .pipe(customPlumber('Error Running JavaScript'))
    .pipe(minifyJs())
    .pipe(dest('dist/assets/js'));
}

function njkRender() {
  return src('src/templates/pages/**/*.+(html|njk)')
    .pipe(nunjucksRender({ path: ['src/templates'], watch: true }))
    .pipe(dest('dist'));
}

function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: 'dist',
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch(
    ['src/templates/**/*.+(html|njk)'],
    parallel(njkRender, browserSyncReload)
  );
  watch(
    [
      'src/scss/**/*.scss',
      'src/js/*.js',
      'src/images/*.{webp,jpeg,png}',
      'src/fonts/*.{eot,woff,woff2}',
    ],
    parallel(
      compileScss,
      minJs,
      transferImages,
      transferFonts,
      browserSyncReload
    )
  );
}

exports.default = parallel(
  transferImages,
  transferFonts,
  compileScss,
  minJs,
  njkRender,
  browserSyncServe,
  watchTask
);

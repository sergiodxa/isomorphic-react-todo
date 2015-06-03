var babelify   = require('babelify');
var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');

// configuración para distintas tareas
// babelify: configuración de babelify indicando que características
// experimentales activar
// browserify: configuración del nombre del archivo generado
var config = {
  babelify: {
    optional: [
      'es7.asyncFunctions',
      'es7.functionBind',
      'es7.objectRestSpread',
      'es7.trailingFunctionCommas',
      'runtime'
    ]
  },
  browserify: {
    fileName: 'app.js',
    extensions: ['.jsx']
  }
}

// rutas de donde leer archivos en las distintas tareas
// y donde dejar los archivos generados
var paths = {
  src: {
    eslint: ['./views/**/*.jsx', './client.jsx', './routes.jsx'],
    js    : './client.jsx'
  },
  build: {
    js    : './public/js/'
  }
}

gulp.task('build:js', function () {
  return browserify({
    entries: paths.src.js,
    debug: true,
    extensions: config.browserify.extensions,
    transform: [babelify.configure(config.babelify)]
  }).bundle()
    .pipe(source(config.browserify.fileName))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
});

gulp.task('watch', function () {
  gulp.watch(paths.src.eslint, ['build:js']);
});

gulp.task('build', ['build:js']);

gulp.task('default', ['build', 'watch']);
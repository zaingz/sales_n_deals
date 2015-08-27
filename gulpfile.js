var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var streamify = require('gulp-streamify')
var browserify = require('browserify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence').use(gulp);
var bower = require('gulp-bower');

 
gulp.task('clean', function(){
    return gulp.src('./build', {read: false})
        .pipe(clean({force:true}))
        .on('error', function(error){
          console.log(error);
        });
});

gulp.task('bower', function() {
  return bower({ directory: 'bower_components', cwd: './src'})
    .pipe(gulp.dest('./build/bower_components'))
});

gulp.task('scripts', function(){    
    return browserify({
        entries: ['./src/js/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/js/'));
});

// Styles
gulp.task('css', function () {
    return gulp.src('src/styles/**/*.css')
    .pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(uglifycss())
    .pipe(gulp.dest('build/styles/'));   
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build/'));
});

// Watch
gulp.task('watch', function() {
  // Watch stylesheets
  gulp.watch('src/styles/**/*.css', ['css']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/js/**/*', ['scripts']);
  gulp.watch('src/*.html', ['html']);

  gulp.watch("build/**/*").on('change', browserSync.reload);

});

gulp.task('serve', function(){
  browserSync.init({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['build'],
      routes: {
        '/build': 'build'
      }
    }
  });
});


gulp.task('default', function() {

  runSequence('clean', 'bower',
              ['scripts', 'html', 'images', 'css'],
               'serve', 'watch');

});
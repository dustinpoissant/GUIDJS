var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function(){
  gulp.src('src/GUID.js')
    .pipe(sourcemaps.init())
    .pipe(uglify().on('error', console.log.bind(console)))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'));
});

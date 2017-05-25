const gulp 	= 	require('gulp');
const babel	=	require('gulp-babel');
const sass	=	require('gulp-sass');

gulp.task('es6', () => {
	return gulp.src('./assets/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('sass', () => {
	return gulp.src('./assets/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('default', () => {
	gulp.watch('./assets/js/*.js', ['es6']);
	gulp.watch('./assets/sass/*.scss', ['sass']);
});
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var fs = require("fs");
var to5ify = require("6to5ify");



gulp.task('browserify', function(){
    browserify('./js/main.js', {standalone: "app", debug: true})
    .transform(to5ify.configure({
        sourceMap: true
    }))
    .bundle().on("error", function(err){
        console.log(err);
    })
    .pipe(source('bundle.js').on("error", function(err){
        console.log(err);
    }))
        // Start piping stream to tasks!
    .pipe(gulp.dest('./build/').on("error", function(err){
        console.log(err);
    }));
});

gulp.task("watch", function(){
    gulp.watch("./js/*", ["browserify"]);
})

gulp.task("default", ["watch", "browserify"]);

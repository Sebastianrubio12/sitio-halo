//Aligerar imagenes

const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');


function imagenes(done){
    const opciones ={
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(cache(imagemin(opciones)))
    .pipe( dest('src/img'))
    done();
}

exports.imagenes = imagenes;
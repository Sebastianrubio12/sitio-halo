//Aligerar imagenes

const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const Webb = require('gulp-webp');


function imagenes(done){
    const opciones ={
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(cache(imagemin(opciones)))
    .pipe( dest('src/img'))
    done();
}

function versionWebb(done){
    const opciones ={
        quality:50
    }
    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(Webb(opciones))
        .pipe( dest('src/img'))
    done();
}

exports.imagenes = imagenes;
exports.versionWebb = versionWebb;
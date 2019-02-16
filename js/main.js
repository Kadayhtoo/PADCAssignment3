import {Movie,MovieDetail} from '/js/Movie.js';

function readData(data,moviearray = []) {    
    console.log(data);
    for (let movie of data.results) {
        const movieObj = new Movie(movie.id,movie.title, movie.poster_path, movie.overview, movie.id);
        moviearray.push(movieObj);
    }
    return moviearray;
}

function displayMovies(moviearray, template,viewport) {  
    for (let movie of moviearray) {        
        viewport.innerHTML += movie.render(template);        
    }
}

export {readData,displayMovies};
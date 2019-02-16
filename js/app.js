import {readData,displayMovies} from '/js/main.js';
import {getUpcomingApiUrl,getDetailApiUrl,key} from '/js/api_url.js';
const detailTemplate = document.getElementById("movie-info-template").innerHTML;
const movieDetailTemplate = document.getElementById("movie-detail-template").innerHTML;
const viewport = document.getElementById("viewport");

fetch(getUpcomingApiUrl(key))
    .then(res => res.json())
    .then(data => readData(data))
    .then((moviearray) => displayMovies(moviearray,detailTemplate,viewport));


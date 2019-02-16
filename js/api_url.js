const rootURL = "https://api.themoviedb.org/3/";
const upcoming = "movie/upcoming?api_key=<<api_key>>&language=en-US&page=<<page>>";
const detail = "/movie/{movie_id}/videos?api_key=<<api_key>>";
const key = "450506481f0397731cf00758f47f93c9";

function getUpcomingApiUrl(key){
    return rootURL + upcoming.replace("<<api_key>>",key);
}

function getDetailApiUrl(movie_id,key){
    return rootURL + detail.replace("{movie_id}",movie_id).replace("<<api_key>>",key);
}

export {getUpcomingApiUrl,getDetailApiUrl,key};
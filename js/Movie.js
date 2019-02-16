class Movie{
    constructor(id,title,poster,overview,link){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.link =link;        
    }
    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.id}}",this.id)
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${this.poster}`)
        .replace("{{this.overview}}",this.overview)
        .replace("{{this.link}}",this.link);
        return result;
    }
}
class MovieDetail{
    constructor(id,title,poster,overview,link){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.link =link;        
    }
    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${this.poster}`)
        .replace("{{this.overview}}",this.overview)
        .replace("{{this.link}}",this.link);
        return result;
    }
}
export {Movie,MovieDetail};
import React from "react";
const img_api = "https://image.tmdb.org/t/p/w1280";
const setVoteColor = (vote) => {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className= "movie">
        <div className="movie-header">
            <img src={IMG_API + poster-path} alt={title}/>
            <div className= "movie-info">
                <h3>{title}</h3>
                <span className= {'tag ${setVoteColor(vote_average)'}>{vote_average}</span>
            </div>

            <div className= "movie-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>

        </div>
        
    </div>;
);
export default Movie;
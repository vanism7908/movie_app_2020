import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, genres, summary, poster}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="moovie__genres">
                {genres.map((genre, i) => <li key={i} className="genres__genre">{genre}</li>)}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div> 
    // <h4>{title}</h4>
}

Movie.prototype = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;
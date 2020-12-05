// import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () =>{
    const {
      data: 
        {data : {movies}
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=desc');
    this.setState({ movies , isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
  return (
    <section className="container"> 
      {isLoading? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
        <div className="movies">
          {this.renderMovie(movies)}
        </div>    
      /* {isLoading? "Loading...": movies.map(movie => {
        return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.poster}/>
      })} */
      )}
    </section>
    );
  }

  renderMovie(movies){
    return movies.map(movie =>{
      return <Movie 
      key={movie.id} id={movie.id} 
      year={movie.year} title={movie.title} 
      summary={movie.summary} 
      genres = {movie.genres}
      poster={movie.medium_cover_image}/>
    })
  }

}
export default Home;

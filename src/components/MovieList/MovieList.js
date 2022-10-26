import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../feature/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss"
import Slider from "react-slick"
import { Settings } from '../../common/setting';
 

const MovieList = () => {
  
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderMovies, renderShows = "";
    renderMovies = 
        movies.Response === "True" ?(
            // eslint-disable-next-line array-callback-return
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <div className='movies-error'>
                <h3>{movies.Error}</h3>
            </div>
        )
    renderShows = 
        shows.Response === "True" ?(
            // eslint-disable-next-line array-callback-return
            shows.Search.map((show, index) => (
                <MovieCard key={index} data={show} />
            ))
        ) : (
            <div className='movies-error'>
                <h3>{shows.Error}</h3>
            </div>
        )
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className='movie-list'>
                <h2>Series</h2>
                <div className='movie-container'>
                <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
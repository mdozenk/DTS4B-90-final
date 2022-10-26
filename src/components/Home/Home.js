import React, { useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Home = () => {
    const createRandomText = () => {
        const text = ["game", "american", "scary", "bad", "war", "spider"]
        return text[Math.floor(Math.random() * 5)]
    }
    const dispatch = useDispatch();
    
    useEffect (() =>{
        dispatch(fetchAsyncMovies(createRandomText()))
        dispatch(fetchAsyncShows(createRandomText()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    return (
        <div>
            <div><Header /></div>
            <div className='banner-img'></div>
            <MovieList/>
            <div><Footer/></div>
        </div>
    );
};

export default Home;
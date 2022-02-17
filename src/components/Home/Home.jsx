import React from 'react';
import { useEffect } from 'react';
import MovieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
    useEffect(()=>{
        const movieText = 'harry'
        const fetchMovies = async()=>{
            const response = await MovieApi.get(
              `?apiKey=${APIKey}&s=${movieText}&type-movie`    
             ).catch((err)=>{
                 console.log("error", err)
             }) 
             console.log("api response", response) 
        }
        fetchMovies()
    },[])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
};

export default Home;
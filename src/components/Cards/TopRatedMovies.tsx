import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState, useEffect} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';
import React from 'react';


const apiKey = import.meta.env.VITE_API_KEY
const ImageUrl = import.meta.env.VITE_IMG
const ListURL = import.meta.env.VITE_LIST


export default function TopRatedMovies() {
    
    type MovieData = {
        id: number,
        title: string,
        poster_path: string,
        vote_average: number,
        backdrop_path: string
        // outras propriedades do filme
      }

    const [topMovies, setTopMovies] = useState<MovieData[]>([])

    const getTopRatedMovies = async (url: string) => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setTopMovies(data.results);
                return data;
            } catch (error) {
                console.error(error);
            }
      };
      useEffect(() => {
        const topRatedURL = `${ListURL}trending/all/day?${apiKey}&language=pt-BR`;
        getTopRatedMovies(topRatedURL);
      }, []);
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      }
    ]
  };


  return (
    <div>
            <h1 className="text-3xl text-white text-left font-impact m-10 mb-5"> Filmes Em Alta</h1>
        <Slider {...settings} className='m-7'>
        {topMovies.map(movie => (
            <Link to={`/filme/${movie.id}`}>
              <div className="movie-card hover:shadow-2xl hover:shadow-purple-400 hover:scale-110 transition-all hover:cursor-pointer" key={movie.id}>
                   <img src={ImageUrl + movie.poster_path} alt={movie.title} width="300px"/>
              </div>
            </Link>
        ))}
        </Slider>
      </div>
  );
}





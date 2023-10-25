
import { Carousel } from "flowbite-react"

const MovieURL = import.meta.env.VITE_API
const BackURL = import.meta.env.VITE_IMGBP
const apiKey = import.meta.env.VITE_API_KEY

import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import React from "react"

interface Movie {
  backdrop_path: string,
  poster_path: string,
  title: string,
  id: number
}


export default function CarroselCard()
{

  const [movies, setMovies] = useState<Movie[]>([])
  
  const GetMovies = async (url:string) => {
    const response = await axios.get(url)
    const data = response.data
    setMovies(data.results)
  
  } 

  useEffect(() => {
    const Series = `${MovieURL}popular?${apiKey}&language=pt-BR`
    GetMovies(Series);
  },[])
  
    return (
        <div className="h-100 mx-auto max-sm:h-96 overflow-hidden">
        <Carousel slideInterval={5000} >


        {movies.map(movie => (
          <div className="relative z-0" key={movie.id}>
 
            <img key={movie.backdrop_path} src={BackURL + movie.backdrop_path} className="w-full   hover:cursor-pointer" />
       
          <div className="absolute inset-0 flex items-center justify-center top-32">
           <Link to={`filme/${movie.id}`}>
          <p className="bg-preto p-2 rounded text-verde text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{movie.title}</p>
          </Link>
        </div>
          </div>
        ))}

        </Carousel>
      </div>
    )
}

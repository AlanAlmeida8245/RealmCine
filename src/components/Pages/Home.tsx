

import CarroselCard from "../Cards/CarroselCard"
import PopularMovies from "../Cards/PopularMovies"
import TopRatedMovies from "../Cards/TopRatedMovies"
import NetflixOriginals from "../Cards/NetflixOriginals"
import Animations from "../Cards/Animations"
import PopularSeries from "../Cards/PopularSeries"
import React from "react"


export default function Home()
{

    return (
      <div>
       

          <CarroselCard />

          <PopularMovies />

          <PopularSeries />
        
          <TopRatedMovies />

          <NetflixOriginals />

          <Animations />

      </div>
    )
}


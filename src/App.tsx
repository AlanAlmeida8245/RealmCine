
import {Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Naavbar from './components/Layouts/Navbar';
import MoviePage from './components/Pages/MoviePage';
import SeriePage from './components/Pages/SeriePage';
import SearchPage from './components/Pages/SearchPage';
import PagesGeneres from './components/Pages/PagesGeneres';
import React from 'react';


function App() {

  return (
    <>
        <Naavbar />
     
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/filme/:id" element={<MoviePage />}></Route>
              <Route path="/serie/:id" element={<SeriePage />}></Route>
              <Route path="/pesquisa/:namemovie" element={<SearchPage />}></Route>
              <Route path="/filmes/:genereid" element={<PagesGeneres />}></Route>
          </Routes>
    </>
  )
}

export default App

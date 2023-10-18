
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom";
import React from "react";
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

export default function Navbar()
{
  const [inputMovie, setInputMovie] = useState("");
  const [openNavbar, setOpenNavbar] = useState(false);

  function handleNavbar(){
    if (openNavbar) {
      setOpenNavbar(false);
    }
    else if (!openNavbar){
      setOpenNavbar(true);
    }
    console.log("teste butão")

  }

  const navigate = useNavigate();

  function searchButton ()
  {
    if (inputMovie.length > 0)
    {
      navigate(`/pesquisa/${inputMovie}`)
    }
  }

  const pressButton = (e: { key: string; }) => {
    if(e.key === "Enter"){
      searchButton()
    }
  }

    return(
      <>
        <header className="bg-preto w-full">
            <nav className="text-verde flex justify-between p-2 items-center">
                <div className="flex justify-center items-center space-x-10">
                  <img src="https://cdn-icons-png.flaticon.com/512/1964/1964625.png" alt="" className="w-20"/>
                  <ul className="flex justify-center space-x-5 max-md:hidden">
                    <Link to="/">
                      <li className="hover:text-white hover:cursor-pointer">Inicio</li>
                    </Link>
                    <Link to="/filmes/27">
                      <li className="hover:text-white hover:cursor-pointer">Terror</li>
                    </Link>
                    <Link to="/filmes/28">
                      <li className="hover:text-white hover:cursor-pointer">Ação</li>
                    </Link>
                    <Link to="/filmes/35">
                      <li className="hover:text-white hover:cursor-pointer">Comédia</li>
                    </Link>
                    <Link to="/filmes/18">
                      <li className="hover:text-white hover:cursor-pointer">Drama</li>
                    </Link>
                    <Link to="/filmes/12">
                      <li className="hover:text-white hover:cursor-pointer">Aventura</li>
                    </Link>
                    <Link to="/filmes/16">
                      <li className="hover:text-white hover:cursor-pointer">Animação</li>
                    </Link>
                </ul>
                   
                </div>

                <div className="max-md:w-full flex">
                    <input type="text" name="" id="" className="mr-5 w-72 p-2 max-md:w-full rounded-lg text-preto" placeholder="Filme, Serie, Desenhos"   onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInputMovie(e.target.value)}
                    onKeyPress={(e: { key: string; }) => pressButton(e)}
                 
                    />
                    <button onClick={searchButton} className="bg-verde text-preto p-2 rounded-lg max-md:hidden">Pesquisar</button>
                    <button className={`bg-verde text-preto rounded-lg md:hidden ${openNavbar ? 'menu-aberto' : ''}`} onClick={handleNavbar}>
                    {!openNavbar ? <AiOutlineMenu className="w-20" /> : <AiOutlineClose className="w-20" />}
                  </button>

                </div>
            </nav>
            {openNavbar && (
              <div className="w-full text-verde">
                <ul className="flex justify-center space-x-3 w-full">
                  <Link to="/">
                    <li className="hover:text-white hover:cursor-pointer">Inicio</li>
                  </Link>
                  <Link to="/filmes/27">
                    <li className="hover:text-white hover:cursor-pointer">Terror</li>
                  </Link>
                  <Link to="/filmes/28">
                    <li className="hover:text-white hover:cursor-pointer">Ação</li>
                  </Link>
                  <Link to="/filmes/35">
                    <li className="hover:text-white hover:cursor-pointer">Comédia</li>
                  </Link>
                  <Link to="/filmes/18">
                    <li className="hover:text-white hover:cursor-pointer">Drama</li>
                  </Link>
                  <Link to="/filmes/12">
                    <li className="hover:text-white hover:cursor-pointer">Aventura</li>
                  </Link>
                  <Link to="/filmes/16">
                    <li className="hover:text-white hover:cursor-pointer">Animação</li>
                  </Link>
                </ul>
              </div>
            )}

            
        </header>
      
        </> 
    )
}
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import {Spinner } from "flowbite-react"
import React from "react"

const apiKey = import.meta.env.VITE_API_KEY
const ImageUrl = import.meta.env.VITE_IMG
const ListURL = import.meta.env.VITE_LIST

    
export default function PagesGeneres()
{

        interface moviesProps {
            length: number
            map: any
            id: number,
            poster_path: string,
            title: string
        }
       
     const {genereid} = useParams()
    const[movies, setMovies] = useState<moviesProps | null>(null)
  
    const [Page, setPage] = useState<number>(1)
    const [TotalPage, setTotalPage] = useState<number>(10)

    const getmoviesMovies = async (url:string) => {
        const response = await axios.get(url)
        const data = response.data
        setMovies(data.results)
        setTotalPage(TotalPage)
        
    }
   
    function getGenreName(id: any) {
        const genreId = parseInt(id);
        switch (genreId) {
          case 28:
            return 'Filmes de Ação';
          case 12:
            return 'Filmes de Aventura';
          case 16:
            return 'Filmes de Animação';
          case 35:
            return 'Filmes de Comédia';
          case 80:
            return 'Filmes de Crime';
          case 99:
            return 'Documentários';
          case 18:
            return 'Filmes de Drama';
          case 10751:
            return 'Filmes de Família';
          case 14:
            return 'Filmes de Fantasia';
          case 36:
            return 'Filmes de História';
          case 27:
            return 'Filmes de Terror';
          case 10402:
            return 'Filmes de Música';
          case 9648:
            return 'Filmes de Mistério';
          case 10749:
            return 'Filmes de Romance';
          case 878:
            return 'Filmes de Ficção científica';
          case 53:
            return 'Filmes Thriller';
          case 10752:
            return 'Filmes de Guerra';
          case 37:
            return 'Filmes de Faroeste';
          default:
            return 'Categoria Indisponivel';
        }
      }
      const ChangePage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= TotalPage) {
          setPage(pageNumber);
        }}
      

    useEffect(() => {
      const moviesURL = `${ListURL}discover/movie?${apiKey}&with_genres=${genereid}&page=${Page}&page_size=40&language=pt-br`;
        getmoviesMovies(moviesURL) 

  }, [Page, genereid])

    return (
        <div>
            <h1 className="text-5xl font-bold text-white m-5 mt-10 max-md:text-4xl max-sm:text-1xl">{getGenreName(genereid)}</h1>
            {movies && movies.length  > 0 && (
            <p className="text-2xl font-bold text-yellow-300 ml-5 max-md:text-lg">
              Página {Page} de {TotalPage}
            </p>
          )}
          
            {movies && movies.length > 0 && (
               <div className="flex justify-center mt-2">
               <button
               onClick={() => ChangePage(Page - 1)}
               className={`${
                   Page === 1 ? "opacity-50 cursor-not-allowed" : ""
               } text-white bg-purple-500 p-2 flex items-center hover:bg-purple-600`}
               disabled={Page === 1}
               >
               <BsFillArrowLeftSquareFill className="w-4 h-4 md:w-6 md:h-6 m-1" />
               <span className="hidden md:inline-block">Página Anterior</span>
               </button>
               {/* BotÃ£o para a prÃ³xima pÃ¡gina */}
               <button
               onClick={() => ChangePage(Page + 1)}
               className={`${
                   Page === TotalPage ? "opacity-50 cursor-not-allowed" : ""
               } text-white bg-purple-500 p-2 flex items-center hover:bg-purple-600`}
               disabled={Page === TotalPage}
               >
               <span className="hidden md:inline-block">Próxima Página</span>
               <BsFillArrowRightSquareFill className="w-4 h-4 md:w-6 md:h-6 m-1" />
               </button>
           </div>
            )}
           

            <div className="max-2xl:flex max-2xl:flex-wrap max-sm:grid max-md:grid-cols-3 justify-center w-full gap-5 p-5">
            {movies  ? (
            movies.map((movie: moviesProps) => (
              <div key={movie.id} className="hover:scale-105 transition-all hover:shadow hover:cursor-pointer">
                <Link to={`/filme/${movie.id}`}>
                  <img src={ImageUrl + movie.poster_path} alt={movie.title} width="200px" />
                </Link>
              </div>
            ))
          ) : (
             
            <div className="text-center my-auto mt-48">
            <Spinner aria-label="Extra large spinner example" size="xl" color="purple"
            />
          </div>
            

          )}

                  
            </div>

        </div>
    )
                   
}


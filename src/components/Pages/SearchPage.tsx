

import {useParams } from "react-router-dom"
const SearchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
const ImageUrl = import.meta.env.VITE_IMG
import axios from "axios"
import { useEffect, useState } from "react"
import SearchInput from "../Layouts/SearchInput"
import {Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom"
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function SearchPage()
{
    const navigate = useNavigate()
    interface Movie{
    
        map: any
        poster_path: string,
        id: number,
        media_type: string
  
    }
    
    const { namemovie } = useParams()
    const [ movies, setMovies ] = useState<Movie | null>(null)
    const [Page, setPage] = useState<number>(1)
    const [TotalPage, setTotalPage] = useState<number>(0)
    

    const verifyMedia = (id: number, media:string) => {
        media === 'movie' ? navigate(`/filme/${id}`) : media === 'tv' ? navigate(`/serie/${id}`) : null;
    }

    const ChangePage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= TotalPage) {
          setPage(pageNumber);
        }

      };

    const getSearchMovies = async (url:string) => {
        const response = await axios.get(url)
        const data = response.data
        console.log(data)
        setMovies(data.results)
        setPage(data.page)
        setTotalPage(data.total_pages)
    }

    useEffect(() => {
        const URLsearch = `${SearchURL}?${apiKey}&query=${namemovie}&page=${Page}&language=pt-BR`
        getSearchMovies(URLsearch);
    }, [Page, namemovie])

    useEffect(() => {
        setPage(1)
    }, [namemovie])

    return (
        <div>
            <SearchInput />
            <h1 className="text-3xl md:text-5xl text-white ml-5 mt-5">
            Resultado para:{" "}
            <span className="text-yellow-300 font-bold">{namemovie}</span>
            </h1>
            <p className="text-base md:text-lg text-purple-500 font-bold ml-5 mt-2">
            Página {Page} de {TotalPage}
            </p>
            {movies && (
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
                {/* Botão para a próxima página */}
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



            <div className="max-2xl:flex max-2xl:flex-wrap max-sm:grid max-sm:grid-cols-2 justify-center w-full gap-5 p-5">
                {movies ? (
                    movies.map((filme: Movie) => (
                    filme.poster_path && 
                    (
                            <div key={filme.id} className="hover:scale-105 transition-all hover:shadow hover:cursor-pointer" onClick={() => verifyMedia(filme.id, filme.media_type)}>
                                <img src={ImageUrl + filme.poster_path} alt="" width="252px" />
                            </div>
                    )
                    ))
                ) : (
                    <div className="text-center my-auto mt-48">
                    <Spinner aria-label="Extra large spinner example" size="xl" color="purple" />
                    </div>
                )}
                </div>
        </div>
    )
}

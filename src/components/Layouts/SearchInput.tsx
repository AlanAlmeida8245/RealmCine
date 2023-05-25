import {BiSearchAlt} from "react-icons/bi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchInput()
{
const [inputMovie, setInputMovie] = useState("");
  const navigate = useNavigate();

  function searchButton ()
  {
   
    if (inputMovie.length > 0)
    {
      navigate(`/pesquisa/${inputMovie}`)
    }
  }
    return (
        <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="ex: Vingadores Ultimato"
          className="w-full md:w-96 m-2 p-2"
          onChange={(e) => setInputMovie(e.target.value)}
        />
        <button onClick={searchButton} className="ml-1">
          <BiSearchAlt className="text-purple-500 w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
    )
}
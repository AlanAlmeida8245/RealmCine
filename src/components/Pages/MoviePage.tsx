import { useParams,} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Rating, Spinner } from "flowbite-react";
import React from "react";


const MovieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const ImageUrl = import.meta.env.VITE_IMG
const BackURL = import.meta.env.VITE_IMGBP



interface Movie {
    id: any;
    backdrop_path: any
    title: string,
    overview: string,
    vote_average:number,
    poster_path: string,
    release_date: string
}

interface producers {
    id: number,
    name: string,
    logo_path: string
}

interface Cast{
    map: any
    profile_path: string,
    character: string,
    name: string
}
interface Reviews{
    [x: string]: any;
    map: any;
    id: number,
    author: string,
    content: string,
    usernam: string,
    rating: number,
    created_at: string
}

interface Generes{
    [x: string]: any;
    name: string
}
export default function MoviePage()
{
    const {id} = useParams()


    const [movie, setMovie] = useState<Movie | null>(null);
    const [producers, setProducers] = useState<producers | null>(null);
    const [Cast, setCast] = useState<Cast | null>(null);
    const [generes, setGeneres] = useState<Generes | null>(null);
    const [reviews, setReviews] = useState<Reviews | null>(null)

    

    function getDate(date:string)
    {
        const inputDate = `${date}`;
        const dateParts = inputDate.split('-');
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
    function getHourDate(date:string)
    {
        const dateTimeString = date;
        const dateTime = new Date(dateTimeString);
        
        const formattedDateTime = dateTime.toLocaleString(); // Formato de data e hora local padrÃ£o
     
        return formattedDateTime
    }

    const GetMovie = async (url:string) => {
        try {
            const response = await axios.get(url)
            const data = response.data
            setMovie(data)
            setProducers(data.production_companies[0])
            setGeneres(data.genres)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const GetCast = async (url:string) => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            setCast(data.cast);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const GetReviews = async (url:string) =>
    {
        try {
            const response = await axios.get(url)
            const data = response.data
            console.log(data)
            setReviews(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        const TheMovieURL = `${MovieURL}${id}?${apiKey}&language=pt-BR`
        GetMovie(TheMovieURL);

        const castUrl = `${MovieURL}${id}/credits?${apiKey}`
        GetCast(castUrl);   

        const ReviewsURL = `${MovieURL}${id}/reviews?${apiKey}`
        GetReviews(ReviewsURL)

     
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
    
    return(
        <>
            {movie ? (
                <section>
                    <div className="imgBack lg:relative opacity-75">
                        {/* imgBack Ã© usado no css global para aplicar o degrade na imagem */}
                        <img src={BackURL + movie.backdrop_path} alt={movie.title}className="w-full" />
                    </div>
                    <div className="lg:absolute m-5 z-10 space-y-2 top-48 max-md:top-10">
                        <h1 className="text-white text-2xl md:text-5xl font-bold">{movie.title}</h1>
                        <div className="flex flex-wrap space-x-2 ml-2">
                            {generes &&
                            generes.map((genere: Generes) => (
                                <p className="text-gray-200">{genere.name}</p>
                            ))}
                        </div>
                        <p className="text-yellow-300 font-bold ml-2 max-md:text-sm">{getDate(movie.release_date)}</p>
                        <Rating>
                            <Rating.Star />
                            <p className="ml-2 text-base font-bold text-white">{movie.vote_average}</p>
                        </Rating>
                        <div className="h-18 ">
                            <p className="text-gray-300 text-sm md:text-lg md:ml-5 overflow-hidden">{movie.overview}</p>
                         </div>
                        {producers && <p className="text-verde bg-preto w-48  text-center p-2 rounded-lg">{producers.name}</p>}
                    </div>  
                        
               

                      
              <div className="max-sm:mt-28">
                    <h1 className="text-2xl md:text-3xl text-white m-5">Elenco</h1>
                    
                    <Slider {...settings} className='m-7'>
                    {Cast && Cast.map((ator: Cast, index: number) => (
                        ator.profile_path && (
                            <>
                            <div className="movie-card hover:shadow-lg hover:shadow-purple-400  transition-all hover:cursor-pointer " key={index}>
                                <img src={ImageUrl + ator.profile_path} alt={ator.name} 
                                    className="rounded-xl"
                                />
                            </div>
                            <div className=" text-white mt-2 p-2 max-md:text-sm text-center">
                                <h1 className="text-lg max-md:text-sm">{ator.name}</h1>
                                <p className="text-yellow-300">{ator.character}</p>
                            </div>
                            </>
                        )
                    ))}
                     </Slider>
               </div>
                        
                        {/*avaliaÃ§Ãµes container*/}
               <div>
                    <h1 className="text-2xl md:text-3xl text-white m-5 text-center">Avaliações</h1>
                        <div className="flex justify-center space-x-2 flex-wrap">
                        {reviews && reviews.length > 0 ? (
                        reviews.map((review: Reviews) => (
                            <div className="flex flex-col gap-3 mt-5 text-white">
                            <div className="flex flex-col gap-4 bg-gray-900 p-4 m-5 shadow-2xl shadow-gray-800">
                                <div className="flex justify justify-between">
                                <div className="flex gap-2">
                                    <div>
                                    <img src={ImageUrl + review.author_details.avatar_path} alt="" className="w-14 h-14 rounded-full" />
                                    </div>
                                    <span>{review.author_details.username}</span>
                                </div>
                                <div className="flex p-1 gap-1 text-orange-300">
                                    <Rating>
                                    <Rating.Star className="w-8 h-8" />
                                    <p className="ml-2 text-base font-bold text-white">{review.author_details.rating}</p>
                                    </Rating>
                                </div>
                                </div>

                                <div>{review.content}</div>

                                <div className="flex justify-between">
                                <span className="font-bold text-black">{getHourDate(review.created_at)}</span>
                                </div>
                            </div>
                            </div>
                        ))
                        ) : (
                        <p className="text-white">Não há avaliações disponiveis</p>
                        )}
                    </div>
               </div>
  );

             </section> 
            ) : (
                <div className="text-center my-auto mt-48">
                    <Spinner aria-label="Extra large spinner example" size="xl" color="purple"
                    />
                </div>
            )}

        </>
    )
}
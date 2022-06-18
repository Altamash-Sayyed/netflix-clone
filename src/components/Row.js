import axios from '../axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl,isLargeRow  }) {
    const [Movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay:1,
        },
      }
      const handleClick =  (movie) => {
        if(trailerUrl){
          setTrailerUrl("");
        }else{
          movieTrailer(movie?.name || "")
          .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
   
          }).catch(error => console.log(error))
        }
          };
   
      return (
        <>
            <div className='row' >
             <h1>   { title }</h1>
          
            <div className='row__posters'>

                {Movies.map((movie => <img                  src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                    alt={`${movie.name}`}
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={`row__poster  ${isLargeRow && "row__posterLarge"} `} 
                />
                ))}
 

  
            {trailerUrl && <YouTube
             videoId={trailerUrl}  
             opts={opts}
            />}
        </div>

            </div>
        </>
    )
}

export default Row

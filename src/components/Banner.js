import React, { useEffect, useState } from 'react'
import axios from '../axios';
import './Banner.css';
import requests from '../request';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
        }
        fetchData();
    }, []); 
    function truncate(str ,n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;  };
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                'https://image.tmdb.org/t/p/original${movie?.backdrop_path}'
            )`,
                backgroundPosition: "center-center",
            }}
        >



            <div className="banner__contents">

                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">

                    <button style={{
                        marginRight:"110px"
                    }}
                        // onClick={()=> handleClick(movie)}

                        className="banner__button">
                        Play
                    </button>
                    <button className="banner__button" style={{
                        marginLeft:"130px"
                    }}>
                        My List
                    </button>

                </div>
                <h1 className="banner__description">

                    {truncate(movie?.overview  , 150 )}

                </h1>


            </div>
        </header>

    )
}

export default Banner

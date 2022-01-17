import React from 'react'
import Header from './Header'
import { useState, useEffect } from "react";
import Photo from './Photo';
import dateFormat from 'dateformat';
function Main() {
    const yestDate = dateFormat(new Date().getTime() - 24*60*60*1000,"isoDate");
    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState(yestDate);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function requestPhotos(){
            const API_KEY = "ubNivh8kwA7sz5yzZVKZcKfHQPPze1mqgrA3lEcm";
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${date}`);
            const json = await response.json();
            setPhotos(json);
            setIsLoaded(true);
        };
        requestPhotos();
    }, [date])

    let filtered = photos.filter(photo => photo.media_type !== "video");

    return (
        <>
            <Header onChange={e =>{
                    if(e === dateFormat(new Date(), "isoDate")){
                        e = yestDate;
                    }
                    setIsLoaded(false);
                    setDate(e);
                }
            }/>

            {
                isLoaded?   
                            <>
                                <div className='max-w-4xl mt-24 mx-auto mb-10 gap-5'>
                                    <div>
                                    {   
                                        filtered.map((photo, index) => (
                                            <Photo name={photo.title} pic={photo.url} date={photo.date} key={index}/>
                                        ))
                                    }
                                    </div>
                                </div>
                            </>
                        :   
                            <>
                                <div className='w-full h-screen flex justify-center items-center bg-secondary'>
                                    <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>
                            </>
            }
        </>
    )
}

export default Main

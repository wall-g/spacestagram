import React from 'react'
import Header from './Header'
import { useState, useEffect } from "react";
import Photo from './Photo';
import dateFormat from 'dateformat';
function Main() {
    const todayDate = dateFormat(new Date(),"isoDate");
    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState(todayDate);
    useEffect(() => {
        requestPhotos();
    }, [date])
    
    async function requestPhotos(){
        const API_KEY = "ubNivh8kwA7sz5yzZVKZcKfHQPPze1mqgrA3lEcm";
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${date}`);
        const json = await response.json();
        setPhotos(json);
    }

    let filtered = photos.filter(photo => photo.media_type !== "video");

    return (
        <>
            <Header onChange={e => setDate(e)}/>

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
    )
}

export default Main

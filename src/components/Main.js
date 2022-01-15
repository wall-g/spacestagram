import React from 'react'
import { useState, useEffect } from "react";
import Photo from './Photo';
function Main() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        requestPhotos();
    }, [])
    
    async function requestPhotos(){
        const API_KEY = "ubNivh8kwA7sz5yzZVKZcKfHQPPze1mqgrA3lEcm";
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2021-12-25`);
        const json = await response.json();
        setPhotos(json);
    }

    let filtered = photos.filter(photo => photo.media_type !== "video");

    return (
        <div className='max-w-5xl mt-36 grid grid-cols-2 gap-8 mx-auto mb-10'>
            {
                filtered.map((photo, index) => (
                    <Photo name={photo.title} pic={photo.url} date={photo.date} key={index}/>
                ))
            }
        </div>
    )
}

export default Main

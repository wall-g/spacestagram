import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
export default function Photo(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [displayContent, setDisplayContent] = useState(false);

    let handleDisplay = (e) => {
        e.preventDefault();
        setDisplayContent(!displayContent);
    }

    let handleToggle = (e) => {
        e.preventDefault();
        setIsLiked(!isLiked);
    }

    return (
        <div className='sm:rounded overflow-hidden shadow-md bg-white pb-6 font-body mb-6'>
            <img src= {props.pic} alt={props.name} className='w-full h-96'/>
            <h2 className='ml-4 mt-4 font-semibold text-base text-gray-600'>{props.name}</h2>
            <p className='ml-4 text-xs text-gray-500 mt-2'>{props.date}</p>
            <span><FontAwesomeIcon icon={faHeart} className={`ml-4 mt-2 cursor-pointer text-lg ${isLiked ? 'text-red-600': 'text-primary'}`} onClick={(e) => handleToggle(e)}/></span>
            <p className='ml-4 text-sm mt-1 text-gray-500 underline cursor-pointer' onClick={(e) => handleDisplay(e)}>Read more</p>
            <p className={`font-body text-sm mr-4 ml-4 mb-2 mt-2 text-gray-600 tracking-wide ${displayContent ? '': 'hidden'}`}>{props.story}</p>
        </div>
    )
}

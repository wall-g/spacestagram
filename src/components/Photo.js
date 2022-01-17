import React from 'react'
export default function Photo(props) {
    return (
        <div className='sm:rounded overflow-hidden shadow-md bg-white pb-12 font-body mb-6'>
            <img src= {props.pic} alt={props.name} className='w-full h-96'/>
            <h2 className='ml-4 mt-4 font-semibold text-base text-gray-600'>{props.name}</h2>
            <p className='ml-4 text-xs text-gray-500 mt-2'>{props.date}</p>
        </div>
    )
}

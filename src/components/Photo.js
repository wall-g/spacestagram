import React from 'react'

export default function Photo(props) {
    return (
        <div>
            <img src= {props.pic} alt={props.name}/>
            <h1>{props.date}</h1>
        </div>
    )
}

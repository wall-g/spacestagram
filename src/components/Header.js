import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
function Header() {
    return (
        <div className='bg-secondary h-20'>
            <h2 className='py-4 px-4 text-2xl font-body text-primary font-semibold'><FontAwesomeIcon icon={ faRocket }/> Spacestagram</h2>
        </div>
    )
}

export default Header

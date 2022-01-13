import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
function Header() {
    return (
        <div className='bg-[#F2EEE4] h-20'>
            <h2 className='px-52 py-5 text-2xl font-body text-primary font-semibold'><FontAwesomeIcon icon={ faRocket }/> Spacestagram</h2>
        </div>
    )
}

export default Header

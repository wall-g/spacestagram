import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
function Header() {
    return (
        <div className='bg-secondary h-20 border-2 border-b-primary fixed inset-x-0 inset-0'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='py-4 text-2xl font-body text-primary font-semibold'><FontAwesomeIcon icon={ faRocket }/> Spacestagram</h2>
            </div>
        </div>
    )
}

export default Header

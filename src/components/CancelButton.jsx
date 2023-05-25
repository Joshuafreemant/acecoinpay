import React from 'react'
import close from '../assets/close.svg'

function CancelButton() {
    return (
            <div className='bg-gray-100 p-2 absolute top-0 right-0 w-10 h-7 flex items-center justify-center'>
                <img src={close} alt="close-icon" className='w-4' />
            </div>
    )
}

export default CancelButton
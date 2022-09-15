import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'

export default function Modal({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (
        <div id='container' onClick={handleOnClose} className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white rounded-lg font-semibold text-sm  w-fit px-4 py-2'>
                <p className='text-black text-xl font-bold justify-center flex my-2'>Choose an avatar</p>
                <div className='flex'>
                    <img className='w-16 h-16 md:w-28 md:h-28 m-2 cursor-pointer rounded-full' src={img1} alt="" />
                    <img className='w-16 h-16 md:w-28 md:h-28 m-2 cursor-pointer rounded-full' src={img2} alt="" />
                    <img className='w-16 h-16 md:w-28 md:h-28 m-2 cursor-pointer rounded-full' src={img3} alt="" />
                </div>
                <div className='flex'>
                    <img className='w-16 h-16 md:w-28 md:h-28 m-2 cursor-pointer rounded-full' src={img4} alt="" />
                    <img className='w-16 h-16 md:w-28 md:h-28 m-2 cursor-pointer rounded-full' src={img5} alt="" />
                    <img className='w-16 h-16 md:w-28 md:h-28 m-2 cursor-pointer rounded-full' src={img6} alt="" />
                </div>
            </div>
        </div>
    )
}


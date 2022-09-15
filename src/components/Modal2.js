import React from 'react'
import { BiVideo, BiUserVoice } from 'react-icons/bi';
import { BsBrightnessHigh} from 'react-icons/bs';

export default function Modal2({ visible, onClose }) {
    function handleOnClose(e) {
        if (e.target.id === 'container') {
            onClose();
        }
    }
    if (!visible) {
        return null
    }
    return (
        <div id='container' onClick={handleOnClose} className=' fixed inset-x-8 inset-0 inset-y-16'>
            <div className='bg-white rounded-lg font-semibold text-sm py-1'>
                <div className='flex flex-col'>
                    <div className='flex items-center border-y p-2'>
                        <div className='mr-2 cursor-pointer text-black '><BsBrightnessHigh /></div>
                        <span className=' text-black'>Toggle Mode</span>
                    </div>
                    <div className='flex items-center border-y p-2'>
                        <div className='mr-2 cursor-pointer text-black '><BiUserVoice /></div>
                        <span className=' text-black'>Voice Call</span>
                    </div>
                    <div className='flex items-center border-y p-2'>
                        <div className='mr-2 cursor-pointer text-black '><BiVideo /></div>
                        <span className=' text-black'>Video Call</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


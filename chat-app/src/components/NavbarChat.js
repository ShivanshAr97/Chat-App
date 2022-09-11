import React from 'react'
import { BiVideo, BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';

const NavbarChat = () => {
    return (
        <>
            <div className='flex align-middle justify-between p-2 rounded-tr-lg bg-slate-700 text-white'>
                <div className='p-2'> 
                    Name
                </div>
                <div className='flex p-3'>
                    <div className='mx-4 cursor-pointer'><BiVideo/></div>
                    <div className='mx-2 cursor-pointer'><AiOutlineUserAdd/></div>
                    <div className='mx-2 cursor-pointer'><BiDotsHorizontalRounded/></div>
                </div>
            </div>
        </>
    )
}

export default NavbarChat
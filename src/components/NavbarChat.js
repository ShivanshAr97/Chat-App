import React, { useContext } from "react";
import { BiVideo, BiDotsHorizontalRounded, BiUserVoice } from 'react-icons/bi';
import { BsBrightnessHigh } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { ChatContext } from "../context/ChatContext";

const NavbarChat = () => {
    const { data } = useContext(ChatContext);
    return (
        <>
            <div className='flex align-middle justify-between p-2 rounded-tr-lg bg-gradient-to-r from-[#000428] to-[#004e92] text-white'>
                <div className='p-2 flex'>
                    <img className="w-10 h-10 rounded-full object-cover" src={data.user?.photoURL} alt="" /> 
                <span className="p-2">{data.user?.displayName}</span>
                </div>
                <div className='flex px-3 my-auto'>
                    <div className='mx-2 cursor-pointer'><BsBrightnessHigh/></div>
                    <div className='mx-2 cursor-pointer'><AiOutlineUserAdd/></div>
                    <div className='mx-4 cursor-pointer'><BiVideo/></div>
                    <div className='mx-4 cursor-pointer'><BiUserVoice/></div>
                    <div className='mx-2 cursor-pointer'><BiDotsHorizontalRounded/></div>
                </div>
            </div>
        </>
    )
}

export default NavbarChat
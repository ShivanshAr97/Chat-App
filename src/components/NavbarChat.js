import React, { useContext, useState } from "react";
import { BiVideo, BiUserVoice } from 'react-icons/bi';
import { BsBrightnessHigh,BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineUserAdd,AiOutlineSearch } from 'react-icons/ai';
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

import Modal from "./Modal";
import Modal2 from "./Modal2";
import Sidebar from "./Sidebar";
const NavbarChat = () => {
    
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [showDown, setShowDown] = useState(false)

    function close() {
        setShowModal(false)
    }
    function close2() {
        setShowSearch(false)
    }
    function close3() {
        setShowDown(false)
    }
    function modalShow() {
        setShowModal(true)
    }

    function searchShow() {
        setShowSearch(true)
    }

    function downShow(){
        setShowDown(true)
    }
    
    return (
        <>
            <div className='flex align-middle justify-between p-1 md:p-2 rounded-t-lg bg-gradient-to-r from-[#000428] to-[#004e92] text-white'>
                <div className='p-2 flex'>
                    <img className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" src={data.user?.photoURL} alt="" />
                    <span className="px-1 py-0.5 md:p-2">{data.user?.displayName}</span>
                </div>
                <div className='flex px-3 my-auto'>
                    <Modal onClose={close} visible={showModal} />
                    <Sidebar onClose={close2} visible={showSearch} />
                    <Modal2 onClose={close3} visible={showDown} />
    
                    <div className='block md:hidden mx-2 md:mx-3 cursor-pointer' onClick={searchShow}><AiOutlineSearch /></div>
                    <div className='hidden md:block md:mx-3 cursor-pointer'><BsBrightnessHigh /></div>
                    <div className='mx-2 md:mx-3 cursor-pointer' onClick={modalShow}><AiOutlineUserAdd /></div>
                    
                    <div className='hidden md:block md:mx-3 cursor-pointer'><BiVideo /></div>
                    <div className='hidden md:block md:mx-3 cursor-pointer'><BiUserVoice /></div>
                    <div className='ml-2 md:hidden md:mx-3 cursor-pointer' onClick={downShow}><BsThreeDotsVertical /></div>
                </div>
            </div>
        </>
    )
}

export default NavbarChat
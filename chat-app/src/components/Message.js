import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";


const Message = ({ message }) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


  return (
    
      
        <div
          ref={ref}
          className={`message ${message.senderId === currentUser.uid && "owner"}`}
        >
          <div className='flex flex-col'>
            <img className='w-8 h-8 mx-2 rounded-full' src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            } alt="" />
            <p className='text-xs flex'>Just now</p>
          </div>
          <div className='mx-2 bg-white rounded-tl-lg rounded-br-lg h-8 align-middle'>
            <p className='px-2 py-1 max-w-sm'>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
          </div>
        </div>
  )
}

export default Message
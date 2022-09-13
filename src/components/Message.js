import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";


const Message = ({ message }) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
        <div className="flex mx-1 mb-2">
          <div className='flex flex-col my-2'>
            <img className='w-8 h-8 mx-2 rounded-full object-cover' src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            } alt="" />
            <p className='text-xs flex dark:text-white'>Just now</p>
          </div>
          <div className=' mx-2 px-2 my-4 flex flex-col align-bottom bg-white rounded-tl-lg rounded-br-lg'>
            <p className=' mx-2 my-1 max-w-xl'>{message.text}</p>
            <div>
            {message.img && <img className="p-2 rounded-xl w-32" src={message.img} alt="" />}
            </div>
          </div>
        </div>
  )
}

export default Message
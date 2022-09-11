import React from 'react'
import { MdOutlineAttachFile } from 'react-icons/md';
import { AiOutlineFileImage } from 'react-icons/ai';

const Input = () => {
  return (
    <div className='flex'>
    <div className=' align-middle border w-full flex'>
    <input className=' outline-none border-none m-2 w-4/5 placeholder:text-gray-400' type="text" placeholder='Type something ...' />
    <div className='flex my-auto mx-2 text-gray-500 cursor-pointer'><MdOutlineAttachFile size="20px"/></div>
    <div className='flex my-auto mx-2 text-gray-500 cursor-pointer'><AiOutlineFileImage size="20px"/></div>
    <button className=' text-sm bg-blue-400 text-white mx-2 my-4 px-4 py-2 rounded-lg'>Send</button>
    </div>

    </div>
  )
}

export default Input
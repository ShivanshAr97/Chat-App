import React from 'react'
import person4Img from '../images/person4Img.png'
import person3Img from '../images/person3Img.jpeg'

const Message = () => {
  return (
    <>
    <div>
      <div className='flex'>
        <div className='flex flex-col'>
          <img className='w-8 h-8 mx-2 rounded-full' src={person4Img} alt="" />
          <p className='text-xs flex'>Just now</p>
        </div>
        <div className='mx-2 bg-white rounded-tl-lg rounded-br-lg h-8 align-middle'>
          <p className='px-2 py-1 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div>
      <div className='flex flex-row-reverse'>
        <div className='flex flex-col'>
          <img className='w-8 h-8 mx-2 rounded-full object-cover' src={person3Img} alt="" />
          <p className='text-xs flex'>Just now</p>
        </div>
        <div className=' flex flex-col mx-2 bg-blue-400 text-white rounded-tr-lg rounded-bl-lg h-8  items-end'>
          <p className='px-2 py-1 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <img className='p-2 rounded-xl' width={100} src={person3Img} alt="" />
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Message
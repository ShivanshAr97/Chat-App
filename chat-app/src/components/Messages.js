import React from 'react'
import Message from './Message'


const Messages = () => {
    return (
        <div className='h-[calc(100%-2rem)]  p-4 bg-blue-100 overflow-y-auto'>
            <Message/>
            {/* <Message/>
            <Message/>
            <Message/> */}
        </div>
    )
}

export default Messages
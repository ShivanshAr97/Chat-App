import React from 'react'
import Chat from './Chat'
import Sidebar2 from './Sidebar2'
import './Sidebar.css'

const Home = () => {
    return (
        <>
            <div className='flex m-2 justify-center h-96'>
                <div className='w-1/3 h-11/12 hidden md:block'>
                    <Sidebar2 />
                </div>
                <div className='md:w-2/3'>
                    <Chat />
                </div>
            </div>
        </>
    )
}

export default Home
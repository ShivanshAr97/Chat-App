import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import './Sidebar.css'

const Home = () => {
    return (
        <>
            <div className='flex m-4 h-96'>
                <div className='w-1/3 h-11/12'>
                    <Sidebar />
                </div>
                <div className='w-2/3'>
                    <Chat />
                </div>
            </div>
        </>
    )
}

export default Home
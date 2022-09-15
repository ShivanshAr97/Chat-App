import React from 'react'
import Chats from './Chats'
import NavbarSidebar from './NavbarSidebar'
import Search from './Search'
import './Sidebar.css'

export default function Sidebar() {
  return (
   
      <div className='text-black rounded-lg font-semibold text-sm px-4 py-2 md:-m-2'>
        <>
        <NavbarSidebar />
          <Search />
          <div className='rounded-b-lg overflow-y-auto max-h-80'>
            <Chats />
          </div>
        </>
    </div>
  )
}
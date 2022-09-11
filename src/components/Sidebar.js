import React from 'react'
import Chats from './Chats'
import NavbarSidebar from './NavbarSidebar'
import Search from './Search'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <NavbarSidebar/>
    <Search/>
    <div className=' overflow-y-auto max-h-96'>
    <Chats/>
    </div>
    </>
  )
}

export default Sidebar
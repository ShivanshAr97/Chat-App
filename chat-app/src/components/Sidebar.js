import React from 'react'
import Members from './Members'
import NavbarSidebar from './NavbarSidebar'
import Search from './Search'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className=''>
    <NavbarSidebar/>
    <Search/>
    <div className=' overflow-y-auto max-h-96'>
    <Members/>
    <Members/>
    <Members/>
    <Members/>
    <Members/>
    <Members/>
    <Members/>
    </div>
    </div>
    </>
  )
}

export default Sidebar
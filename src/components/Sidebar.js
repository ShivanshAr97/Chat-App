import React from 'react'
import Chats from './Chats'
import NavbarSidebar from './NavbarSidebar'
import Search from './Search'
import './Sidebar.css'

export default function Sidebar({ visible, onClose }) {
  function handleOnClose(e) {
    if (e.target.id === 'container') {
      onClose();
    }
  }
  if (!visible) {
    return null
  }
  return (
    <div id='container' onClick={handleOnClose} className='px-3 fixed inset-0 top-0 bg-black bg-opacity-30 backdrop-blur-sm flex'>
      <div className='text-black rounded-lg font-semibold text-sm md:px-4 py-2'>
        <>
        <NavbarSidebar />
          <Search />
          <div className='rounded-b-lg overflow-y-auto max-h-80'>
            <Chats />
          </div>
        </>
      </div>
    </div>
  )
}


// const Sidebar = () => {
//   return (
//     <>
/* <NavbarSidebar/>
<Search/>
<div className=' overflow-y-auto max-h-96'>
<Chats/>
</div> */
    // </>
//   )
// }
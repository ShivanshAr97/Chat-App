import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext'
import './Sidebar.css'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='flex flex-col md:flex-row align-middle justify-between pt-4 md:p-4 rounded-t-lg bg-gradient-to-r from-[#000428] to-[#004e92] text-white'>
      <h1 className='flex justify-center md:justify-start md:px-4 md:pt-2'>गप-शप</h1>
      <div className='flex justify-between m-1 -mt-6 md:mt-0 md:my-0'>
        <img className='w-8 h-8 md:w-10 md:h-10 rounded-full object-cover' src={currentUser.photoURL} alt="" />
        <p className='hidden md:block px-4 py-2'>{currentUser.displayName}</p>
        <button className='block md:hidden bg-blue-400 text-white m-1 px-1 cursor-pointer rounded-lg' onClick={() => signOut(auth)}><FiLogOut size={12}/></button>
        <button className='hidden md:block my-1.5 bg-blue-400 text-white px-3 text-sm cursor-pointer rounded-lg' onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
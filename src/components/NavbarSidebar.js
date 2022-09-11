import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import './Sidebar.css'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='flex align-middle justify-between p-2 rounded-tl-lg bg-slate-800 text-white'>
      <h1 className='px-4 py-2 font-bold'>गप-शप</h1>
      <div className='flex'>
      <img className='w-10 h-10 rounded-full object-cover' src={currentUser.photoURL} alt="" />
      <p className='px-4 py-2'>{currentUser.displayName}</p>
      <button className='my-1.5 bg-blue-400 text-white px-3 text-sm cursor-pointer rounded-lg' onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
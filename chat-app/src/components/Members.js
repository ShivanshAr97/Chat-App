import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import person4Img from '../images/person4Img.png'

const Members = () => {

    return (
        <div className='flex cursor-pointer bg-slate-600 hover:bg-slate-700 p-2 border-b border-white'>
            <div>
                <img className=' p-2 w-16 h-16 object-cover rounded-full' src={person4Img} alt="" />
            </div>
            <div className='flex flex-col my-3'>
                <h1 className=' font-bold text-white'>Name</h1>
                <p className=' text-xs text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
        </div>
    )
}

export default Members
import React from 'react'
import { AiOutlineFileImage } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import RegisterImg from '../images/registerImg.webp'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Avatars from "./Avatars";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false)
  const [showAvatar, setShowAvatar] = useState(false)
  function close5() {
    setShowAvatar(false)
  }
  function avatarShow() {
    setShowAvatar(true)
  }
  function showPass() {
    if (document.getElementById("passw").type="password") {
        document.getElementById("passw").type="text"
    }
    else if(document.getElementById("passw").type="password") {
    document.getElementById("passw").type="text"
    } 
}


  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0];


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
    <Avatars onClose={close5} visible={showAvatar}/>
    <div className='flex m-8'>
      <div className='w-1/2 hidden md:block'>
        <img src={RegisterImg} alt="" />
      </div>
      <div className='mx-2 w-full md:w-1/2 md:mx-12'>
        <h1 className='flex justify-center font-bold text-3xl md:mt-20 mb-8'>Register with Us</h1>
        <form onSubmit={handleSubmit}>
          {err && <span>Something Went Wrong</span>}
          <input className='flex border-2 outline-none px-4 py-2 rounded-lg my-4 w-full md:mx-12 md:w-4/5 justify-center' type="name" placeholder='Username' required />
          <input className='flex border-2 outline-none px-4 py-2 rounded-lg my-4 w-full md:w-4/5 md:mx-12 justify-center' type="email" placeholder='Email' required />
          <input id="pass" className='flex border-2 outline-none px-4 py-2 rounded-lg w-full my-4 md:mx-12 md:w-4/5 justify-center' type="password" placeholder='Password' required />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <div className='flex justify-center my-4'>
            {/* <div className='flex justify-center'> */}
            <span><AiOutlineFileImage size="24px"/></span>
            <span className='px-2 cursor-pointer'>Add Avatar</span>
            {/* <span className='px-2 cursor-pointer' onClick={avatarShow}>Add Avatar</span> */}
            {/* </div> */}
            </div>
          </label>
          <button type='submit' className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Sign Up</button>
          <p className='flex justify-center text-sm'>Already have an account ?<Link to="/login"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Log in</span></Link></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register
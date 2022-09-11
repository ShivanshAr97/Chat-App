import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import RegisterImg from '../images/registerImg.webp'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0];


    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
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
    <div className='flex m-8'>
      <div className='w-1/2'>
        <img src={RegisterImg} alt="" />
      </div>
      <div className='w-1/2'>
        <h1 className='flex justify-center font-bold text-3xl mt-20'>Register with Us</h1>
        <form onSubmit={handleSubmit}>
          {err && <span>Something Went Wrong</span>}
          <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="name" placeholder='Username' required />
          <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="email" placeholder='Email' required />
          <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="password" placeholder='Password' required />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={RegisterImg} width={40} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type='submit' className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Sign Up</button>
          <p className='flex justify-center text-sm'>Already have an account ?<Link to="/login"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Log in</span></Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
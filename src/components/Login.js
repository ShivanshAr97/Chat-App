import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom';
import LoginImg from '../images/loginImg.png'
import { AiOutlineGoogle, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        console.log("Clicked ")
        navigate("/")
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className='flex m-8 justify-center'>

            <div className='w-1/2'>
                <img className='w-11/12' src={LoginImg} alt="" />
            </div>
            <div className='w-1/2'>
                <h1 className='flex justify-center font-bold text-3xl my-6'>Welcome back</h1>
                <form onSubmit={handleSubmit}>
                {err && <span>Something Went Wrong</span>}
                    <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="email" placeholder='Email' required />
                    <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="password" placeholder='Password' required />
                    <p className='flex justify-end text-sm text-blue-600 cursor-pointer mx-4'>Forgot password ?</p>
                    <button className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Log In</button>
                    <p className='flex justify-center text-sm'>Don't have an account ? <Link to="/"> <span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Sign Up</span></Link></p>
                </form>
                <p className='border-b text-center mt-6'>Or</p>
                <div className='flex align-middle flex-col my-4'>
                    <button className=" flex justify-center align-middle btn border bg-green-600 text-white px-4 py-2 rounded-lg w-3/4 my-1 mx-auto"> <span className='my-1'><AiOutlineGoogle /></span> &nbsp; Login with Google</button>
                    <button className="btn flex align-middle justify-center border bg-gray-600 text-white px-4 py-2 rounded-lg w-3/4 my-1 mx-auto">
                        <span className='m-1'><AiFillGithub /></span>&nbsp;Login with GitHub</button>
                    <button className="btn flex align-middle justify-center border bg-blue-600 text-white px-4 py-2 rounded-lg w-3/4 my-1 mx-auto"><span className='my-1'><AiFillFacebook /></span> &nbsp;Login with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react'
import LoginImg from '../images/loginImg.png'

const Login = () => {
    return (
        <div className='flex m-8 justify-center'>
        
            <div className='w-1/2'>
                <img className='w-11/12' src={LoginImg} alt="" />
            </div>
            <div className='w-1/2'>
                <h1 className='flex justify-center font-bold text-3xl my-6'>Welcome back</h1>
                <form action="">
                    <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="email" placeholder='Email' required />
                    <input className='flex border px-4 py-2 rounded-lg m-2 w-4/5 justify-center' type="password" placeholder='Password' required />
                    <p className='flex justify-end text-sm text-blue-600 cursor-pointer mx-4'>Forgot password ?</p>
                    <button className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Log In</button>
                    <p className='flex justify-center text-sm'>Don't have an account ? <span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Sign Up</span></p>
                </form>
                <p className='border-b text-center mt-6'>Or</p>
                <div className='flex flex-col my-4'>
                    <button className="btn border bg-green-600 text-white px-4 py-2 rounded-lg w-3/4 my-1 mx-auto"><i class="fa-brands text-white fa-google"></i>&nbsp; Login with Google</button>
                    <button className="btn border bg-gray-600 text-white px-4 py-2 rounded-lg w-3/4 my-1 mx-auto"><i class="fa-brands fa-github"></i> &nbsp;Login with GitHub</button>
                    <button className="btn border bg-blue-600 text-white px-4 py-2 rounded-lg w-3/4 my-1 mx-auto"><i class="fa-brands fa-facebook"></i> &nbsp;Login with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Login
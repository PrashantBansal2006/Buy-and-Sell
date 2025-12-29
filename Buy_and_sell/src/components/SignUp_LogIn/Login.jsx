import React from 'react'
import { ArrowLeft, DivideCircle } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Lock } from 'lucide-react'
import './signup_login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='dull_gradient flex justify-center items-center max-w-[100vw] h-[100vh] '>
            <div className='p-10 flex items-start justify-center flex-col'>
                <NavLink to="/" className='flex items-center text-gray-500 mb-5'><ArrowLeft className='mr-2' size={20} /> Back to Home</NavLink>
                <div className='flex items-center justify-center flex-col px-10 py-10 rounded-2xl shadow-2xl'>
                    <div className='flex items-center justify-center flex-col'>
                        <img className='h-20' src="https://cdn3d.iconscout.com/3d/premium/thumb/home-3d-icon-png-download-4652885.png" alt="" />
                        <h1 className='name text-3xl font-bold'>Welcome Back</h1>
                        <p className='text-gray-500 mt-3'>Log in to continue to HostelHub</p>
                    </div>
                    <form action="" className='flex justify-start w-[100%] my-5 flex-col'>
                        <div className='mb-4'>
                            <label className='flex items-center mb-2 font-semibold' htmlFor="email"><Mail className='mr-5' size={18} />Email</label>
                            <input type="email" placeholder='your.email@college.edu' className='w-100 bg-white p-4 rounded-2xl' />
                        </div>
                        <div className='mb-4'>
                            <div className=' mb-2 flex items-center justify-between'>
                                <label className='flex items-centerfont-semibold' htmlFor="password"><Lock className='mr-5' size={18} />Password</label>
                                <a href="" className='text-blue-500'>Forgot?</a>
                            </div>
                            <input type="password" placeholder='••••••••' className='w-100 bg-white p-4 rounded-2xl' />
                        </div>

                        <a href=""><button className='b_gradient w-100 p-4 rounded-2xl text-white font-semibold'>Log In</button></a>
                    </form>
                    <div className='text-gray-500 mt-2'>
                        Don't have an account? <NavLink to="/SignUp" className='text-blue-500'> Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

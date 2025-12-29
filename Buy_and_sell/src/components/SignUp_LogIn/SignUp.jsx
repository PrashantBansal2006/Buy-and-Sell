import React from 'react'
import { ArrowLeft, DivideCircle } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Lock } from 'lucide-react'
import './signup_login.css'
import { NavLink } from 'react-router-dom'
import { User } from 'lucide-react'
import { Building } from 'lucide-react'
import { House } from 'lucide-react'

const SignUp = () => {
    return (
        <div className='dull_gradient flex justify-center items-center max-w-[100vw] '>
            <div className='p-10 flex items-start justify-center flex-col'>
                <NavLink to="/" className='flex items-center text-gray-500 mb-5'><ArrowLeft className='mr-2' size={20} /> Back to Home</NavLink>
                <div className='flex items-center justify-center flex-col px-10 py-10 rounded-2xl shadow-2xl'>
                    <div className='flex items-center justify-center flex-col'>
                        <img className='h-20' src="https://cdn3d.iconscout.com/3d/premium/thumb/home-3d-icon-png-download-4652885.png" alt="" />
                        <h1 className='name text-3xl font-bold'>Join HostelHub</h1>
                        <p className='text-gray-500 mt-3'>Create your account to get started</p>
                    </div>
                    <form action="" className='flex justify-start w-[100%] my-5 flex-col'>
                        <div className='mb-4'>
                            <label className='flex items-center mb-2 font-semibold' htmlFor="email"><User className='mr-5' size={18} />Full Name</label>
                            <input type="email" placeholder='Your Name' className='w-100 bg-white py-2 px-4 rounded-2xl' />
                        </div>
                        <div className='mb-4'>
                            <label className='flex items-center mb-2 font-semibold' htmlFor="email"><Mail className='mr-5' size={18} />Email</label>
                            <input type="email" placeholder='your.email@college.edu' className='w-100 bg-white py-2 px-4 rounded-2xl' />
                        </div>

                        <div className='flex gap-4'>
                        <div className='mb-4'>
                            <label className='flex items-center mb-2 font-semibold' htmlFor="text"><Building className='mr-5' size={18} />College</label>
                            <input type="email" placeholder='Your College' className='w-48 bg-white py-2 px-4 rounded-2xl' />
                        </div>
                        <div className='mb-4'>
                            <label className='flex items-center mb-2 font-semibold' htmlFor="text"><House  className='mr-5' size={18} />Hostel</label>
                            <input type="email" placeholder='Your Hostel' className='w-48 bg-white py-2 px-4 rounded-2xl' />
                        </div>
                        </div>

                        <div className='mb-4'>
                            <label className='flex items-center mb-2 font-semibold' htmlFor="password"><Lock className='mr-5' size={18} />Password</label>
                            <input type="password" placeholder='••••••••' className='w-100 bg-white py-2 px-4 rounded-2xl' />
                        </div>

                        <a href=""><button className='b_gradient w-100 p-4 rounded-2xl text-white font-semibold'>Create Account</button></a>
                    </form>
                    <div className='text-gray-500 mt-2'>
                        Already have an account? <NavLink to="/LogIn" className='text-blue-500'> Log in</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

import React from 'react'
import "./navbar.css"
import { Moon } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const navbar = () => {
    return (
        <header className='z-1000 fixed top-0 left-0 w-[100vw] border-b-1 border-solid border-gray-400 bg-white'>
            <nav className='h-16 px-10 flex align-middle'>
                <div className='flex items-center justify-between w-[100%]'>
                    <NavLink to='/'>
                        <div className="left flex items-center cursor-pointer">
                            <img className='h-10' src="https://cdn3d.iconscout.com/3d/premium/thumb/home-3d-icon-png-download-4652885.png" alt="" />
                            <span className='name text-2xl pl-2.5 font-bold'>HostelHub</span>
                        </div>
                    </NavLink>
                    <div className="right flex items-center">
                        <div className='mr-3'><Moon className='hover:bg-[#e9ebef] p-1.5 size-8 rounded-full cursor-pointer' strokeWidth={1.5} /></div>
                        <NavLink to="/LogIn" className='px-3 py-1.5 rounded-xl mx-3 cursor-pointer hover:bg-[#e9ebef]'>
                            <button >Log In</button>
                        </NavLink>
                        <NavLink to="/SignUp" className='b_gradient px-3 py-1.5 rounded-xl ml-3 cursor-pointer'>
                            <button className='text-white '>Sign Up</button>
                        </NavLink>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default navbar

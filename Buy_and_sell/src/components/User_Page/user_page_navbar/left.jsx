import React from 'react'
import { NavLink } from 'react-router-dom'

const left = () => {
    return (
        <NavLink to='/'>
            <div className="left flex items-center cursor-pointer">
                <img className='h-10' src="https://cdn3d.iconscout.com/3d/premium/thumb/home-3d-icon-png-download-4652885.png" alt="" />
                <span className='name text-2xl pl-2.5 font-bold'>HostelHub</span>
            </div>
        </NavLink>
    )
}

export default left

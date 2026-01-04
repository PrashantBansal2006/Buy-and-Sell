import React from 'react'
import { Copyright } from 'lucide-react'



const footer = () => {


    const year = new Date().getFullYear()
    return (
        <footer className='bg-[#101828] flex flex-col justify-center items-center'>
            <div className='text-white py-15 px-10 flex justify-start w-[90%]'>
                <div className='px-10 w-1/4'>
                    <div className='flex items-center mb-5'>
                        <img className='h-10' src="https://cdn3d.iconscout.com/3d/premium/thumb/home-3d-icon-png-download-4652885.png" alt="" />
                        <h3 className='text-2xl font-bold ml-3'>HostelHub</h3>
                    </div>
                    <p className='text-gray-500'>The trusted marketplace for college students.</p>
                </div>
                <div className='flex flex-col px-10 w-1/4'>
                    <h3 className='mb-5'>Quick Links</h3>
                    <div className='flex flex-col text-gray-500 gap-2'>
                        <p>Browse Items</p>
                        <p>Sell Item</p>
                        <p>Dashboard</p>
                    </div>
                </div>
                <div className='flex flex-col px-10 w-1/4'>
                    <h3 className='mb-5'>Categories</h3>
                    <div className='flex flex-col text-gray-500 gap-2'>
                        <p>Books</p>
                        <p>Electronics</p>
                        <p>Furniture</p>
                        <p>Notes</p>
                        <p>Cycles</p>
                    </div>
                </div>
                <div className='flex flex-col px-10 w-1/4'>
                    <h3 className='mb-5'>Connect</h3>
                    <div className='flex  text-gray-500 gap-2'>
                        <p>Browse Items</p>
                    </div>
                </div>
            </div>

            <div className='w-[90%]' style={{border:"0.5px solid #6a7282"}}></div>

            <div className='p-10'>
                <p className='text-gray-500 flex items-center'><Copyright className='text-gray-500 mr-2' size={15}/>{year} HostelHub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default footer

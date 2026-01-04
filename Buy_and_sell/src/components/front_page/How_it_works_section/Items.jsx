import React from 'react'
import './Items.css'
import { Search } from 'lucide-react'
import { Package } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

const Items = () => {
    return (
        <div className='flex gap-6 justify-center mt-10'>
            <div className='w-[30%] bg-[#f8f6ff] flex flex-col items-center justify-center p-10 rounded-2xl shadow-md'>
                <div className='text-white mb-5 bg-[#009cf2] p-5 rounded-full' style={{}}><Search size={40} /></div>
                <h3 className='text-2xl mb-3 text-black font-semibold'>Browse Items</h3>
                <p className='mx-5'>Search for items you need from fellow hostel mates</p>
            </div>
            <div className='w-[30%] bg-[#f8f6ff] flex flex-col items-center justify-center p-10 rounded-2xl shadow-md'>
                <div className='text-white mb-5 bg-[#c24ae6] p-5 rounded-full' style={{}}><MessageCircle size={40} /></div>
                <h3 className='text-2xl mb-3 text-black font-semibold'>Connect with Sellers</h3>
                <p className='mx-5'>Chat directly with sellers to negotiate and arrange pickup</p>
            </div>
            <div className='w-[30%] bg-[#f8f6ff] flex flex-col items-center justify-center p-10 rounded-2xl shadow-md'>
                <div className='text-white mb-5 bg-[#00c467] p-5 rounded-full' style={{}}><Package size={40} /></div>
                <h3 className='text-2xl mb-3 text-black font-semibold'>Complete the Deal</h3>
                <p className='mx-5'>Meet in person at your hostel and complete the transaction safely</p>
            </div>
        </div>
    )
}

export default Items

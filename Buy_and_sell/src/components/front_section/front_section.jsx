import React from 'react'
import "./front_section.css"
import { Search } from 'lucide-react'
import { Package } from 'lucide-react'
import Items_category from './items_category'

const front_section = () => {
    return (
        <div  className='py-30  px-10'>
            <div className='flex justify-center items-center  flex-col'>
                <h1 className='name text-7xl font-bold mb-10'>Buy & Sell Hostel <br /> Essentials Easily </h1>
                <p className='mx-80 mb-10 text-center text-2xl text-[#4a5565]'>The trusted marketplace for college students. Find great deals on books, electronics, furniture, and more from your hostel mates.</p>
                <div className='flex gap-6'>
                    <a href="" className='b_gradient rounded-full px-5 py-3  font-semibold text-white    text-lg'><button className='flex items-center'><Search className='mr-3 size-4' strokeWidth={2} />Browse Items</button></a>
                    <a href="" className='rounded-full px-5 py-3  font-semibold border-1 border-solid border-gray-300 text-lg shadow-lg'><button className='flex items-center'><Package className='mr-3 size-4' strokeWidth={1} />Sell Your Item</button></a>
                </div>
            </div>
            
            <Items_category />

        </div>
    )
}

export default front_section

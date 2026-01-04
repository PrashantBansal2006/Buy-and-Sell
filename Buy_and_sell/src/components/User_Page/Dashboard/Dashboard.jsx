import React from 'react'
import User_page_navbar from '../user_page_navbar/user_page_navbar'
import { Package } from 'lucide-react'
import { DollarSign } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const dashboard = () => {

  const items1 = [{
    color: '#1190fa',
    num: 5,
    tag: 'Items Listed',
    icon: Package,
  },
  {
    color: '#00c16e',
    num: 12,
    tag: 'Items Sold',
    icon: DollarSign,
  },
  {
    color: '#bf4aed',
    num: 23,
    tag: 'Messages',
    icon: MessageCircle,
  },
  {
    color: '#ff5d00',
    num: 8,
    tag: 'Saved Items',
    icon: Heart,
  }]

  const items2 = [
    {
      img: 'https://images.jdmagicbox.com/quickquotes/images_main/second-hand-apple-laptop-2222941756-q3g8s1h9.jpg',
      price: '₹15000',
      name: 'Engineering Textbook Set',
      category: 'Books',
      condition: 'Good',
    },
    {
      img: 'https://images.jdmagicbox.com/quickquotes/images_main/second-hand-apple-laptop-2222941756-q3g8s1h9.jpg',
      price: '₹15000',
      name: 'Engineering Textbook Set',
      category: 'Books',
      condition: 'Good',
    },
    {
      img: 'https://images.jdmagicbox.com/quickquotes/images_main/second-hand-apple-laptop-2222941756-q3g8s1h9.jpg',
      price: '₹15000',
      name: 'Engineering Textbook Set',
      category: 'Books',
      condition: 'Good',
    },
  ]
  return (
    <div>
      <User_page_navbar />
      <div className='px-10 pt-30 pb-20'>
        <div className='mb-10'>
          <h1 className='text-[#4d53fb] text-5xl font-bold mb-2'>Welcome Back! 👋</h1>
          <p className='text-gray-500'>Here's what's happening with your items</p>
        </div>
        <div className='gap-4 flex mb-20'>
          {items1.map((elem, idx) => {
            return (
              <div id={idx} className={`flex p-10 flex-col rounded-2xl w-1/4 shadow-2xl justify-start items-start`} >
                <div className='mb-4 rounded-2xl p-4 inline-block text-white' style={{ backgroundColor: elem.color }}><elem.icon /></div>
                <p className='text-4xl font-bold mb-2'>{elem.num}</p>
                <p className='text-gray-500'>{elem.tag}</p>
              </div>
            )
          })}
        </div>


        <div className='text-white flex gap-4 mb-10'>
          <div className='bg-[#6e61ff] w-1/2 p-10 rounded-2xl'>
            <div className='mb-4'><ShoppingBag size={50} strokeWidth={2} /></div>
            <h2 className='text-3xl font-bold mb-4'>Sell an Item</h2>
            <p className='mb-6'>List your items and reach fellow students</p>
            <NavLink>
              <button className='px-4 py-3 bg-white text-[#6e61ff] rounded-xl font-bold'>Start Selling</button>
            </NavLink>
          </div>
          <div className='bg-[#00c16e] w-1/2 p-10 rounded-2xl'>
            <div className='mb-4'><Package size={50} strokeWidth={2} /></div>
            <h2 className='text-3xl font-bold mb-4'>Browse Items</h2>
            <p className='mb-6'>Find what you need from hostel mates</p>
            <NavLink>
              <button className='px-4 py-3 bg-white text-[#00c16e] rounded-xl font-bold'>Start Browsing</button>
            </NavLink>
          </div>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold pb-8'>Recent Listings</h2>

          <div className='flex justify-between'>
            {items2.map((elem, idx) => {
              return (
                <div id={idx} className='rounded-2xl overflow-hidden shadow-xl relative cursor-pointer'>
                  <div className=''>
                    <img className='h-65' src={elem.img} alt="" />
                    <div className='absolute right-4 top-4 inline bg-white px-2 py-1 rounded-2xl font-semibold'>{elem.price}</div>
                  </div>
                  <div className='px-5 py-5'>
                    <h3 className='text-xl font-bold mb-3'>{elem.name}</h3>
                    <div className='w-100% flex justify-between items-center'>
                      <span className='text-gray-500'>{elem.category}</span>
                      <span className='text-green-500 bg-green-200 rounded-2xl px-3 py-1'>{elem.condition}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard

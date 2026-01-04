import React from 'react'
import User_page_navbar from '../user_page_navbar/user_page_navbar'
import { Search } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Heart } from 'lucide-react'

const Browse = () => {

  const items = [
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
          <h1 className='text-[#4d53fb] text-5xl font-bold mb-2'>Browse Marketplace</h1>
          <p className='text-gray-500'>Find great deals from your hostel mates</p>
        </div>
        <div className='p-10 flex rounded-xl shadow-xl gap-4 w-[100%] mb-10'>
          <div className='w-[70%]'>
            <div className='bg-gray-200 flex px-5 py-1 rounded-xl text-gray-500 items-center'>
              <Search />
              <input className='w-[100%] p-2' placeholder='search items...' type="text" />
            </div>
          </div>
          <button className='bg-gray-200 flex px-5 py-3 rounded-xl text-gray-500 w-[30%] justify-between'>
            <span>All Categories</span>
            <ChevronDown />
          </button>
        </div>
        <div className='flex justify-start max-w-[100vw] flex-wrap gap-8 items-center'>
          {items.map((elem, idx) => {
            return (
              <div id={idx} className='rounded-2xl overflow-hidden shadow-xl cursor-pointer w-[31.85%]'>
                <div className='relative'>
                  <img className='' src={elem.img} alt="" />
                  <div className='absolute left-4 top-[80%]  inline bg-white px-2 py-1 rounded-2xl font-semibold'>{elem.price}</div>
                  <div className='p-3 bg-white absolute top-4 right-4 rounded-full'><Heart /></div>
                </div>
                <div className='px-5 py-5'>
                  <div className='w-100% flex justify-between items-center mb-2'>
                    <span className='text-blue-500 bg-blue-200 rounded-2xl px-3 py-1'>{elem.category}</span>
                    <span className='text-green-500 bg-green-200 rounded-2xl px-3 py-1'>{elem.condition}</span>
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{elem.name}</h3>
                  <p className='text-gray-500 mb-2'>Complete set of Engineering textbooks for 3rd year. Well maintained with minimal highlights.</p>
                  <div className='flex items-center'>
                    <img className='h-7 rounded-full w-7 object-cover mr-3' src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" alt="" />
                    <span className='text-gray-500'>Sahara Miller</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Browse

import React from 'react'
import { Eye } from 'lucide-react'

const ActiveListing = () => {

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
  ]
  return (
          <div className='flex justify-between'>
            {items.map((elem, idx) => {
              return (
                <div id={idx} className='rounded-2xl overflow-hidden shadow-xl cursor-pointer'>
                  <div className=''>
                    <img className='h-65' src={elem.img} alt="" />
                  </div>
                  <div className='px-5 py-5'>
                    <h3 className='text-xl font-bold mb-3'>{elem.name}</h3>
                    <div className='font-bold text-blue-500 text-2xl mb-3'>{elem.price}</div>
                    <div>
                        <button className='flex'><Eye className='mr-4' />View</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
  )
}

export default ActiveListing

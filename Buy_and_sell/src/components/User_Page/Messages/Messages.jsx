import React from 'react'
import User_page_navbar from '../user_page_navbar/user_page_navbar'

const Messages = () => {

  const buyers = [
    {
      name: 'Sarah Miller',
      last_message: 'Can you lower the price a bit?',
      img: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    },
    {
      name: 'Sarah Miller',
      last_message: 'Can you lower the price a bit?',
      img: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    },
    {
      name: 'Sarah Miller',
      last_message: 'Can you lower the price a bit?',
      img: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    },
  ]
  return (
    <div>
      <User_page_navbar />
      <div className='px-10 pt-25 pb-20'>
        <div className='mb-10'>
          <h1 className='text-[#4d53fb] text-5xl font-bold mb-2'>Messages</h1>
        </div>
        <div className='flex gap-3'>
          <div className='flex px-5 py-4 shadow-2xl rounded-2xl flex-col items-center justify-center w-[30%]'>
            {buyers.map((elem, idx) => {
              return (
                <div id={idx} className='py-3 px-4 my-1 rounded-2xl bg-gray-100 w-[100%]'>
                  <div className='flex items-center'>
                    <img className='h-14 rounded-full object-cover w-14 mr-2' src={elem.img} alt="" />
                    <div>
                      <h4 className='font-semibold'>{elem.name}</h4>
                      <p className='text-gray-500'>{elem.last_message}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>


          <div className='flex shadow-2xl rounded-2xl w-[70%] items-start'>
            <div className='flex px-5 py-3 border-b-2 w-[100%] border-gray-100 '>
              <img className='h-14 rounded-full object-cover w-14 mr-2' src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg' alt="" />
              <div className='flex flex-col justify-center'>
                <h4 className='font-semibold'>Sarah Miller</h4>
                <p className='text-gray-500'>North Campus Hostel</p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages

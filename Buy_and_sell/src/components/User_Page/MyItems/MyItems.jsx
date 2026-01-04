import React from 'react'
import User_page_navbar from '../user_page_navbar/user_page_navbar'
import ActiveListing from './ActiveListing'


const MyItems = () => {
  return (
    <div>
      <User_page_navbar />
      <div className='px-10 pt-25 pb-20 bg-[#f9fafb] h-[100vh]'>
        <div className='mb-7'>
          <h1 className='text-[#4d53fb] text-5xl font-bold mb-2'>My Items</h1>
          <p className='text-gray-500'>Manage your listings</p>
        </div>

        <div>
          <div className='items-center bg-white py-2 inline-flex rounded-2xl px-3 font-semibold mb-7'>
            <button className='px-3'>Active Listing</button>
            <button className='px-3'>Sold Items</button>
            <button className='px-3'>Drafts</button>
          </div>
          <ActiveListing/>
        </div>
      </div>


    </div>
  )
}

export default MyItems

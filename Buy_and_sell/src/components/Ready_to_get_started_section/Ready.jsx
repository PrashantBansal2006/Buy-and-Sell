import React from 'react'
import { ArrowRight } from 'lucide-react'
const Ready = () => {
  return (
    <div className='px-10 py-20 flex justify-center flex-col text-center text-white '>
      <div className='mx-60'>
        <div className='b_gradient py-20 rounded-2xl flex flex-col items-center'>
            <h2 className='text-4xl font-bold mb-5'>Ready to Get Started?</h2>
            <p className='text-xl mb-5'>Join thousands of students already buying and selling on HostelHub</p>
            <a href="" className='bg-white rounded-full'><button className='name flex items-center font-bold text-2xl py-2 px-4'>Create Free Account <ArrowRight color="#ab2fcb" className='ml-4'/></button></a>
        </div>
      </div>
    </div>
  )
}

export default Ready

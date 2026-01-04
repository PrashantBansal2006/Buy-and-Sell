import React from 'react'
import Left from './left'
import Center from './center'
import Right from './right'

const user_page_navbar = () => {
  return (
        <header className='z-1000 fixed top-0 left-0 w-[100vw] border-b-1 border-solid border-gray-400 bg-white'>
            <nav className='h-16 px-10 flex align-middle'>
                <div className='flex items-center justify-between w-[100%]'>
                    <Left/>
                    <Center/>
                    <Right/>
                </div>
            </nav>
        </header>
  )
}

export default user_page_navbar

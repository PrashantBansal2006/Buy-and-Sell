import React from 'react'
import Items from './items'

const featured_section = () => {
  return (
    <div className='px-10 py-10 flex justify-center flex-col text-center'>
      <h3 className='name text-4xl font-bold'>Featured Categories </h3>
      <Items />
    </div>
  )
}

export default featured_section

import React from 'react'
import './students_say.css'
import Items from './Items'

const students_say = () => {
  return (
    <div className='px-10 py-20 flex justify-center flex-col text-center'>
      <h3 className='name text-4xl font-bold'>What Students Say </h3>
      <Items />
    </div>
  )
}

export default students_say

import React from 'react'
import { Moon } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'

const right = () => {
    return (
        <div className="right flex items-center">
            <div className='mr-3'><Moon className='hover:bg-[#e9ebef] p-1.5 size-8 rounded-full cursor-pointer' strokeWidth={1.5} /></div>
            <div><CircleUserRound  className='rounded-full hover:bg-[#e9ebef] p-1.5  size-9 cursor-pointer' strokeWidth={1.5}/></div>
        </div>
    )
}

export default right

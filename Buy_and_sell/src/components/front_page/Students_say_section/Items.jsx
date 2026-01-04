import React from 'react'
import './Items.css'
import { Star } from 'lucide-react'

const items = [
    {
        img: 'https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=2048x2048&w=is&k=20&c=w6igpE1F9hueKGII9aqPEkuHrysj52qte3IfK7EjqD4=',
        name: 'Priya Sharma',
        text: '"Found amazing deals on textbooks! Saved thousands this semester."'
    },
    {
        img: 'https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=2048x2048&w=is&k=20&c=fnZGo2G0VGxc8V6HRm8sfs_l7zG8k724pmCKMXOsNvw=',
        name: 'Rahul Kumar',
        text: '"Sold my old laptop in just 2 days. Super easy to use!"'
    },
    {
        img: 'https://media.istockphoto.com/id/1399568352/photo/asian-businessman-working-on-his-laptop-portrait-of-young-asian-businessman-working-in-a.jpg?s=2048x2048&w=is&k=20&c=K4QWaqZiAdGjl19CIFC_PX_DHm99qGr1m0yAzDtF1Zs=',
        name: 'Sammer Patel',
        text: '"Best platform for college students. Trustworthy and convenient."'
    }
]

const Items = () => {
    return (
        <div className='flex gap-6 justify-center mt-10'>
            {items.map((elem) => {
                return (
                    <div className='w-[30%] bg-white flex flex-col items-start text-start justify-center p-10 rounded-2xl shadow-md'>
                        <div className='flex mx-5 items-center justify-center'>
                            <img className='h-15 rounded-full w-15 object-cover' src={elem.img} alt="" />
                            <div className='flex flex-col ml-3'>
                                <div className='font-semibold text-xl'>{elem.name}</div>
                                <div className='flex'>
                                    <Star className='star' size={18} />
                                    <Star size={18} />
                                    <Star size={18} />
                                    <Star size={18} />
                                    <Star size={18} />
                                </div>
                            </div>
                        </div>
                        <p className='mx-5 mt-5'>{elem.text}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Items

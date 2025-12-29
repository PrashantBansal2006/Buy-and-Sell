import React from 'react'
import "./items.css"

const Items = [
    {
        bg_color: '#00a8e9',
        item_name: 'Books',
        img: 'https://assets.streamlinehq.com/image/private/w_512,h_512,ar_1/f_auto/v1/icons/1/books-0v6ywyuf8guox9fdilwp.png/books-3mb1jyok95y7bo3a7d183i.png?_a=DATAg1AAZAA0'
    },
    {
        bg_color: '#df44bd',
        item_name: 'Electronics',
        img: 'https://images.emojiterra.com/microsoft/fluent-emoji/15.1/512px/1f4bb_color.png'
    },
    {
        bg_color: '#ff5a00',
        item_name: 'Furniture',
        img: 'https://images.emojiterra.com/microsoft/fluent-emoji/15.1/1024px/1f6cb_color.png'
    },
    {
        bg_color: '#00bd5b',
        item_name: 'Notes',
        img: 'https://images.emojiterra.com/twitter/v13.1/512px/1f4dd.png'
    },
    {
        bg_color: '#f7a600',
        item_name: 'Cycles',
        img: 'https://cdn.creazilla.com/emojis/46666/bicycle-emoji-clipart-xl.png'
    },
]

const items = () => {
    return (
        <div className='flex gap-3 mt-10'>
            {Items.map((elem) => {
                return (
                    <div className='w-1/5 rounded-2xl h-40 cursor-pointer hover:shadow-2xl transition duration-300' style={{ backgroundColor: elem.bg_color }}>
                        <div className='p-5 flex justify-center flex-col items-center'>
                            <img className='h-15 mt-2' src={elem.img} alt="" />
                            <div className='mt-4 text-white font-semibold text-xl'>{elem.item_name}</div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default items

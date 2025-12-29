import React from 'react'
import './items_category.css'

const items = [
    {
        img: "https://pix10.agoda.net/hotelImages/6212927/0/3ebf91f673bab5372be8c4d563aa875c.jpeg?ce=0&s=1024x768",
        item_name: "Hotel Rooms"
    },
    {
        img: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg",
        item_name: "Study Materials"
    },
    {
        img: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800,h_586/https://ikonic.com/wp-content/uploads/2023/10/industries-consumer-electronics.jpeg",
        item_name: "Electronics"
    }
]
const items_category = () => {
    return (
        <div className='mt-15 flex gap-6'>
            {items.map((elem) => {
                return (
                    <div className='h-84 w-1/3 rounded-2xl relative overflow-hidden flex flex-col justify-end bg-black  cursor-pointer  hover:shadow-2xl transition duration-300'>
                        <img className='absolute top-0 left-0 object-cover opacity-80' src={elem.img} alt="#" />
                        <div className='z-1 mb-5 ml-5 text-1xl text-white font-semibold'>
                            {elem.item_name}
                        </div>
                    </div>
                    )
            })}

        </div>

    )
}

export default items_category

import Image from 'next/image'
import React from 'react'
import Rating from '../rating'

function ProductCard({ product: { id, title, price, rating, description, image } }) {

  return (
    <div className='max-w-[260px] rounded-2xl shadow-lg bg-[#1B1B1B]'>
      <div className='flex flex-col'>
        <Image
          src={image}
          width={260}
          height={250}
          className="object-cover rounded-t-2xl z-[1] opacity-90 hover:opacity-100 transition-opacity"

        />
        <div className='relative p-3 space-y-2 h-48'>
          <h1 className='font-medium text-2xl'> {title}</h1>
          <div className='flex items-center gap-2'>
            <Rating
              stars={Array(5).fill(rating)}
            />
            ({rating})
          </div>
          <p className='max-h-24 overflow-auto'> {description} </p>
          <div className='absolute bottom-2 w-full flex justify-between items-center pr-6'>
            <span className='text-white text-xl'> ${price}</span>
            <button className='hover:text-gray-400'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
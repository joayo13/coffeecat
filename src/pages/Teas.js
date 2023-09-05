import React from 'react'
import teaItems from '../products/teaItems'

function Teas() {
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='text-center flex flex-col items-center'>
      <h2 className='text-3xl'>Tea Shop</h2>
      <h3 className='underline'>All Products</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[0].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[1].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[2].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[3].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[4].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[5].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[6].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[7].title}</p>
        </li>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{teaItems[8].title}</p>
        </li>
      </ul>
      <p>Page 1 of 1</p>
      </section>
    </div>
  )
}

export default Teas
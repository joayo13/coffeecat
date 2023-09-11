import React from 'react'
import { Link } from 'react-router-dom'
import teaItems from '../products/teaItems'
// clipper teas? 
function Teas() {
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='text-center flex flex-col items-center'>
      <strong className='text-6xl py-2'>The Catalog</strong>
      <h3 className='underline'>All Products</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
        <Link to='0'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[0].title} src={teaItems[0].image}></img>
          <strong>{teaItems[0].title}</strong>
        </li>
        </Link>
        <Link to='1'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[1].title} src={teaItems[1].image}></img>
          <strong>{teaItems[1].title}</strong>
        </li>
        </Link>
        <Link to='2'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[2].title} src={teaItems[2].image}></img>
          <strong>{teaItems[2].title}</strong>
        </li>
        </Link>
        <Link to='2'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[3].title} src={teaItems[3].image}></img>
          <strong>{teaItems[3].title}</strong>
        </li>
        </Link>
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
import React from 'react'
import { Link } from 'react-router-dom'
import coffeeItems from '../products/coffeeItems'

function Coffees() {
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='text-center flex flex-col items-center'>
      <h2 className='text-3xl'>Coffee Shop</h2>
      <h3 className='underline'>All Products</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
        <Link to='0'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[0].title}</p>
        </li>
        </Link>
        <Link to='1'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[1].title}</p>
        </li>
        </Link>
        <Link to='2'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[2].title}</p>
        </li>
        </Link>
        <Link to='3'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[3].title}</p>
        </li>
        </Link>
        <Link to='4'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[4].title}</p>
        </li>
        </Link>
        <Link to='5'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[5].title}</p>
        </li>
        </Link>
        <Link to='6'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[6].title}</p>
        </li>
        </Link>
        <Link to='7'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[7].title}</p>
        </li>
        </Link>
        <Link to='8'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4 bg-red-500'>
          <img className='h-3/4 w-full' alt='poop'></img>
          <p>{coffeeItems[8].title}</p>
        </li>
        </Link>
      </ul>
      <p>Page 1 of 1</p>
      </section>
    </div>
  )
}

export default Coffees
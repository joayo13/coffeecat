import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({setMobileMenuActive, slide}) {
  return (
    <div style={slide === 'left' ? {animation: 'slideLeft 1s ease forwards'} : {animation: 'slideRight 1s ease forwards'}} className='w-full text-center p-2 md:w-2/5 z-20 fixed right-0 top-0 h-full bg-neutral-900'>
        <button onClick={() => setMobileMenuActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 absolute top-2 right-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='w-full h-full flex flex-col items-center justify-evenly font-extrabold text-7xl'>
          <Link onClick={() => setMobileMenuActive(false)} to='/'>Home</Link>
          <Link onClick={() => setMobileMenuActive(false)} to='/coffees'>Coffee Shop</Link>
          <Link onClick={() => setMobileMenuActive(false)} to='/teas'>Tea Shop</Link>
          <Link onClick={() => setMobileMenuActive(false)} to='/cats'>Cathub</Link>
        </div>
    </div>
  )
}

export default MobileMenu
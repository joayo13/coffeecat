import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({setMobileMenuActive, slide}) {
  return (
    <div style={slide === 'left' ? {animation: 'slideLeft 1s ease forwards'} : {animation: 'slideRight 1s ease forwards'}} className='w-full text-center p-2 md:w-2/5 z-10 fixed right-0 top-0 h-full bg-neutral-900 text-neutral-300'>
        <div className='h-16 md:h-32'></div>
        <div className='w-full flex flex-col gap-2 items-center justify-evenly font-extrabold text-4xl'>
          <Link onClick={() => setMobileMenuActive(false)} to='/'>Home</Link>
          <Link onClick={() => setMobileMenuActive(false)} to='/coffees'>Coffee Shop</Link>
          <Link onClick={() => setMobileMenuActive(false)} to='/catalog'>The Catalog</Link>
          <Link onClick={() => setMobileMenuActive(false)} to='/cats'>Cathub</Link>
        </div>
    </div>
  )
}

export default MobileMenu
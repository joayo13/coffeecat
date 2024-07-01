import React from 'react'
import { Link } from 'react-router-dom'

function Cancel() {
  return (
    <div className='text-neutral-300 text-center h-screen pt-16'>
      <strong className='text-3xl md:text-6xl'>You have cancelled your transaction.</strong>
      <Link className='underline block py-4' to='/'>Return to Home</Link>
      <div className="absolute hidden xl:block right-0 top-0 w-44 h-full side-banner"></div>
    <div className="absolute hidden xl:block left-0 top-0 w-44 h-full side-banner"></div>
    </div>
  )
}

export default Cancel
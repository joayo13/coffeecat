import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='text-neutral-300 text-center h-screen'>
      <strong className='text-3xl md:text-6xl'>Oops! This Page does not exist.</strong>
      <Link className='underline block py-4' to="/">Return To Home</Link>
    </div>
  )
}

export default NotFound
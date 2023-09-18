import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'

function NotFound() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div>
      <div className='hb'>
      <div className='hb1'></div>
      <div className='hb2'></div>
      <div className='hb3'></div>
      </div>
    </div>
  )
}

export default NotFound
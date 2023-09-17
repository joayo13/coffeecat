import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'

function NotFound() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div>NotFound</div>
  )
}

export default NotFound
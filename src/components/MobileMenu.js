import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({mobileMenuActive, setMobileMenuActive, slide}) {
  useEffect(() => {
    const body = document.body;
    if (mobileMenuActive) {
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.overflowY = 'scroll';
    } else {
      body.style.position = '';
      body.style.width = '';
      body.style.overflowY = '';
    }
  }, [mobileMenuActive]);
  return (
    <div className={mobileMenuActive ? 'requires-no-scroll' : null}>
    <div style={slide === 'left' ? {animation: 'slideLeft 0.3s cubic-bezier(.38,.59,.78,.96) forwards'} : {animation: 'slideRight 0.3s cubic-bezier(.38,.59,.78,.96) forwards'}} className='w-80 text-center p-2 z-10 fixed right-0 top-0 h-full bg-neutral-900 text-neutral-300'>
        <div className=' pt-16 w-full h-[80%] flex flex-col gap-8 items-start justify-start text-xl'>
          <div className='flex gap-2 items-center'><span className='material-icons'>home</span><Link className='underline' onClick={() => setMobileMenuActive(false)} to='/'>Home</Link></div>
          
          <div className='flex gap-2 items-center'><span className='material-icons'>local_cafe</span><Link className='underline' onClick={() => setMobileMenuActive(false)} to='/coffees'>Coffee Shop</Link></div>
          <div className='flex gap-2 items-center'><span className='material-icons'>shopping_basket</span><Link className='underline' onClick={() => setMobileMenuActive(false)} to='/catalog'>The Catalog</Link></div>
          <div className='flex gap-2 items-center'><span className='material-icons'>star</span><Link className='underline' onClick={() => setMobileMenuActive(false)} to='/cats'>Top Cats</Link></div>
        </div>
    </div>
    </div>
  )
}

export default MobileMenu
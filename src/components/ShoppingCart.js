import React from 'react'

function ShoppingCart({setShoppingCartActive, slide}) {
  return (
    <div style={slide === 'left' ? {animation: 'slideLeft 1s ease forwards'} : {animation: 'slideRight 1s ease forwards'}} className='w-full text-center p-2 md:w-2/5 z-20 fixed right-0 top-0 h-full bg-neutral-900'>
        <strong className='text-2xl'>Shopping Cart</strong>
        <button onClick={() => setShoppingCartActive(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 absolute top-2 right-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
    </div>
  )
}

export default ShoppingCart
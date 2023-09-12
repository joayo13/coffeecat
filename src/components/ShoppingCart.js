import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'

function ShoppingCart({setShoppingCartActive, slide, cartUpdated}) {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
  const cartData = JSON.parse(localStorage.getItem('cart'))
  setCart(cartData)
  setTotalPrice(cartData.reduce((prev, acc) => (prev.price * prev.quantity) + (acc.price * acc.quantity)))
  },[cartUpdated])
  return (
    <div style={slide === 'left' ? {animation: 'slideLeft 1s ease forwards'} : {animation: 'slideRight 1s ease forwards'}} className='w-full text-center p-2 md:w-2/5 z-20 fixed right-0 top-0 h-full bg-neutral-900'>
      <strong className='text-2xl'>Shopping Cart</strong>
      <button onClick={() => setShoppingCartActive(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 absolute top-2 right-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className='flex flex-col gap-2'>{cart.map((item) => <CartItem cartItemData={item}/>)}</ul>
      <div className='absolute bottom-2 w-full flex justify-center'>
      <button className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-full'>Checkout ({totalPrice})</button>
      </div>
    </div>
  )
}

export default ShoppingCart
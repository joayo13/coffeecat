import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function ShoppingCart({shoppingCartActive, setShoppingCartActive, slide, cartUpdated}) {
  useEffect(() => {
    const body = document.body;
    if (shoppingCartActive) {
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.overflowY = 'scroll';
    } else {
      body.style.position = '';
      body.style.width = '';
      body.style.overflowY = '';
    }
  }, [shoppingCartActive]);
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
  if(!localStorage.getItem('cart')) {
    return
  }
  const cartData = JSON.parse(localStorage.getItem('cart'))
  setCart(cartData)
  setTotalPrice(cartData.reduce((total, curVal) => total + (curVal.price * curVal.quantity), 0).toFixed(2))
  },[cartUpdated])
  return (
    <div>
    <div style={slide === 'left' ? {animation: 'slideLeft 0.3s cubic-bezier(.38,.59,.78,.96) forwards'} : {animation: 'slideRight 0.3s cubic-bezier(.38,.59,.78,.96) forwards'}} className=' w-80 pt-16 h-full text-center p-2 z-20 fixed right-0 top-0 bg-neutral-900 text-neutral-300'>
      <button onClick={() => setShoppingCartActive(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 absolute top-16 right-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className='cart flex flex-col gap-2 h-[75%] overflow-y-scroll'>{cart.length ? cart.map((item) => <CartItem cartItemData={item} setShoppingCartActive={setShoppingCartActive}/>) : <p>Your cart is empty.</p>}</ul>

      <div className='absolute bottom-2 w-full flex justify-center'>
      <Link onClick={() => setShoppingCartActive(false)} to="/checkout" className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-full'>Checkout ({totalPrice})</Link>
      </div>
    </div>
    </div>
  )
}

export default ShoppingCart
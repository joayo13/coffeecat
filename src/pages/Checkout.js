import React, { useEffect, useState } from 'react'
import CheckoutItem from '../components/CheckoutItem'

function Checkout({cartUpdated, setCartUpdated}) {
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
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='text-center flex flex-col items-center'>
      <strong className='text-6xl py-2'>Checkout</strong>
      <h3 className='underline'>Items in cart ({cart.length})</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
      {cart.map((item) => <CheckoutItem cartItemData={item} totalPrice={totalPrice}/>)}
      </ul>
      </section>
      <section className='text-center flex flex-col items-center'>
        <strong className='text-6xl py-2'>Total Price: ${totalPrice}</strong>
        <button className='bg-green-700 text-neutral-300'>Continue With Stripe</button>
      </section>
    </div>
  )
}

export default Checkout
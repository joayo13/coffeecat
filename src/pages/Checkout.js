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
    function handlePayment () {
      fetch("https://lilac-anemone-wig.cyclic.cloud/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: cart,
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e)
    })
    }
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='flex flex-col items-center'>
      <strong className='text-6xl py-4 text-center'>Shopping Cart</strong>
      <ul className='flex flex-col bg-neutral-800 justify-center rounded-lg gap-2 p-2 flex-wrap'>
      {cart.map((item) => <CheckoutItem cartItemData={item} totalPrice={totalPrice} setCartUpdated={setCartUpdated}/>)}
      <strong className='text-center text-lg'>Total Price Before Taxes: ${totalPrice}</strong>
      </ul>
      </section>
      <section className='text-center flex flex-col items-center'>
        <button onClick={() => handlePayment()} className='bg-green-700 text-neutral-300 py-2 px-4 rounded-full my-2'>Continue With Stripe</button>
      </section>
    </div>
  )
}

export default Checkout
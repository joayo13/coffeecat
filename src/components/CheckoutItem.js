import React from 'react'

function CheckoutItem({cartItemData, totalPrice}) {
  const thisItemsTotalPrice = cartItemData.price * cartItemData.quantity
  return (
    <li className='w-72 h-96'>
      <img className='h-3/4 w-full' alt={cartItemData.title} src={cartItemData.image}></img>
      <strong>{cartItemData.title} ({cartItemData.quantity}) - ${thisItemsTotalPrice}</strong>
      <span className='flex gap-2 justify-center'>
        <div className='mb-2 py-2 px-4 rounded-lg flex gap-4 bg-neutral-300 text-neutral-800 text-lg font-extrabold'>
          <button>-</button>
          <p className='opacity-50'>|</p>
          <p>{cartItemData.quantity}</p>
          <p className='opacity-50'>|</p>
          <button>+</button>
        </div>
      </span>
    </li>
  )
}

export default CheckoutItem
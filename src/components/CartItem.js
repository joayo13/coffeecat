import React from 'react'

function CartItem({cartItemData}) {
  return (
    <li>
      <strong>{cartItemData.title} ({cartItemData.quantity})</strong>
      <img alt={cartItemData.title} src={cartItemData.image} className="w-full h-32 object-contain"></img>
      <button className='bg-neutral-300 text-sm text-neutral-800 font-extrabold py-1 px-2 rounded-full'>Edit / Remove</button>
    </li>
  )
}

export default CartItem
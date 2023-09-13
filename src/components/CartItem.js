import React from 'react'

function CartItem({cartItemData}) {
  return (
    <li className='flex flex-col items-center'>
      <img alt={cartItemData.title} src={cartItemData.image} className="w-full h-32 object-contain"></img>
      <strong>{cartItemData.title} ({cartItemData.quantity})</strong>
      <button className='bg-neutral-300 block text-sm text-neutral-800 font-extrabold py-1 px-2 rounded-full mt-2'>Edit / Remove</button>
    </li>
  )
}

export default CartItem
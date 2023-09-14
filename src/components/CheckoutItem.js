import React from 'react'

function CheckoutItem({cartItemData, totalPrice}) {
  const thisItemsTotalPrice = cartItemData.price * cartItemData.quantity
  function preventMoreThan30chars(str) {
    let newStr = str
    if(str.length > 30) {
     newStr = str.slice(0, 30) + '...'
    }
    return newStr
  }
  return (
    <li className='w-full flex gap-2 items-center'>
      <img className='h-12 w-12 object-cover' alt={cartItemData.title} src={cartItemData.image}></img>
      <strong className='text-sm md:text-lg w-24 md:w-80'>{preventMoreThan30chars(cartItemData.title)}</strong>
      <div className='flex items-center justify-center h-12 w-12 bg-neutral-700 text-neutral-300 font-extrabold'>
        <input onInput={(e) => alert(e.target.value)} type='number' className='h-12 w-12 bg-neutral-700 text-center text-neutral-300 font-extrabold' defaultValue={cartItemData.quantity}></input>
      </div>
      <strong>${thisItemsTotalPrice}</strong>
      <button className='text-red-500 text-sm md:text-base'>Remove</button>
    </li>
  )
}

export default CheckoutItem
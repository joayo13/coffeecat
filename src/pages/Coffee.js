import React from 'react'
import { useParams } from 'react-router-dom'
import coffeeItems from '../products/coffeeItems'

function Coffee() {
  const item = useParams()
  return (
    <div className='bg-neutral-900 text-neutral-300'>
        <h2>{coffeeItems[item.id].title}</h2>
        <img alt={coffeeItems[item.id].title}></img>
        <p>${coffeeItems[item.id].price}</p>
        <p>- 1 +</p>
        <button className='bg-black'>Add to cart</button>
    </div>
  )
}

export default Coffee
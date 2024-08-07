import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import coffeeItems from '../products/coffeeItems'
import { addToCart } from '../helpers/cartFunctions'
import { scrollToTop } from '../helpers/scrollToTop'

function Coffee({setCartUpdated, cartUpdated, setShoppingCartActive, setShoppingCartShowing}) {
  const item = useParams()
  const [quantity, setQuantity] = useState(1)
  const [imageLoaded, setImageLoaded] = useState(false)
  useEffect(() => {
    scrollToTop()
  },[])

  function quantityHandler (amount) {
    if(quantity + amount >= 1) {
      setQuantity(prev => prev + amount)
    }
    else {
      return
    }
  }
  return (
    <div className='bg-neutral-900 text-neutral-300 pt-16'>
      <section className='flex flex-col w-full items-center py-2 px-4'>
        <strong className='text-3xl pb-2 md:text-6xl max-w-lg text-center'>{coffeeItems[item.id].title}</strong>
        {imageLoaded ? null : <div className='h-96 w-96 bg-neutral-800 animate-pulse'></div>}
        <img className={imageLoaded ? 'md:max-w-lg' : 'invisible'} alt={coffeeItems[item.id].title} src={coffeeItems[item.id].image} onLoad={() => setImageLoaded(true)}></img>
        <p className='max-w-lg py-2'>{coffeeItems[item.id].desc}</p>
        <strong className='py-2'>${coffeeItems[item.id].price}</strong>
        <div className='mb-2 py-2 px-4 rounded-lg flex gap-4 bg-neutral-300 text-neutral-800 text-lg font-extrabold'>
          <button onClick={() => quantityHandler(-1)}>-</button>
          <p className='opacity-50'>|</p>
          <p>{quantity}</p>
          <p className='opacity-50'>|</p>
          <button onClick={() => quantityHandler(1)}>+</button>
        </div>
        <button onClick={() => {addToCart(coffeeItems[item.id], quantity); setCartUpdated(true); setShoppingCartShowing(true); setShoppingCartActive(true)} } className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-full'>Add to cart</button>
        </section>
        <div className="absolute hidden xl:block right-0 top-0 w-44 h-full side-banner"></div>
    <div className="absolute hidden xl:block left-0 top-0 w-44 h-full side-banner"></div>
    </div>
  )
}

export default Coffee
import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'
import sirThomas from '../images/sir-thomas.jpg'
import peter from '../images/peter.jpg'
import mcChicken from '../images/mcchicken.jpg'
function Cats() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='bg-neutral-900 text-neutral-300 pt-16'>
      <section className='flex flex-col w-full items-center py-2 px-4'>
        <strong className='text-3xl text-center pb-2 md:text-6xl max-w-lg'>Fastest Cat</strong>
        <img className=' object-cover w-96 h-96' alt='sir thomas' src={sirThomas}></img>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Name:</strong>
          <p>Sir Thomas</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Favorite Food:</strong>
          <p>Kraft Singles</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Superpower:</strong>
          <p>Super Speed at 1am</p>
        </span>
        </section>
        <section className='flex flex-col w-full items-center py-2 px-2'>
        <strong className='text-3xl text-center pb-2 md:text-6xl max-w-lg'>Loudest Meow</strong>
        <img className=' object-cover w-96 h-96' alt='poo' src={mcChicken}></img>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Name:</strong>
          <p>McChicken</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Favorite Food:</strong>
          <p>Chicken</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Superpower:</strong>
          <p>Meowing very loudly</p>
        </span>
        </section>
        <section className='flex flex-col w-full items-center py-2 px-2'>
        <strong className='text-3xl text-center pb-2 md:text-6xl max-w-lg'>Highest Jump</strong>
        <img className=' object-cover w-96 h-96' alt='poo' src={peter}></img>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Name:</strong>
          <p>Peter</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Favorite Food:</strong>
          <p>Doritos</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Superpower:</strong>
          <p>Extremely high catnip tolerance</p>
        </span>
        </section>
        <div className="absolute hidden xl:block right-0 top-0 w-44 h-full side-banner"></div>
    <div className="absolute hidden xl:block left-0 top-0 w-44 h-full side-banner"></div>
    </div>
  )
}

export default Cats
import React from 'react'

function Cats() {
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='flex flex-col items-center first-letter gap-4'>
      <strong className='text-center text-6xl md:text-9xl'>Cathub</strong>
      <article className='bg-gradient-to-r from-pink-900 to-neutral-800 w-full rounded-lg flex flex-col items-center gap-2 text-xl md:text-6xl p-4'>
        <strong className='text-2xl md:text-7xl'>Best Cat Award:</strong>
        <h3>Oscar</h3>
        <img alt='oscar the cat' src='https://www.onegreenplanet.org/wp-content/uploads/2014/07/m1lead.jpg' className='rounded-full h-12 w-12 md:h-24 md:w-24 object-cover'></img>
        <div className='text-center'>
        <h4 className='text-sm md:text-lg text-opacity-50'>Favorite food</h4>
        <p>Kraft Singles</p>
        </div>
        <div className='text-center'>
        <h4 className='text-sm md:text-lg text-opacity-50'>Superpower</h4>
        <p>Super strength and speed at 2AM</p>
        </div>
        <div className='text-center'>
        <h4 className='text-sm md:text-lg text-opacity-50'>Origin Story</h4>
        <p>lorem blah blah blag</p>
        </div>
      </article>
      </section>
      <section className='flex flex-wrap w-full justify-center gap-2'>
        <h2 className='text-2xl md:text-7xl underline w-full text-center'>Honorable Mentions</h2>
        <ul className='flex flex-wrap w-full'>
          <li className='w-full md:w-1/3 bg-red-500'>Cat 1</li>
          <li className='w-full md:w-1/3 bg-red-500'>Cat 1</li>
          <li className='w-full md:w-1/3 bg-red-500'>Cat 1</li>
          <li className='w-full md:w-1/3 bg-red-500'>Cat 1</li>
          <li className='w-full md:w-1/3 bg-red-500'>Cat 1</li>
          <li className='w-full md:w-1/3 bg-red-500'>Cat 1</li>
        </ul>
      </section>
    </div>
  )
}

export default Cats
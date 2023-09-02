import React from 'react'

function Cats() {
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='flex flex-col items-center'>
      <h2 className='text-center text-3xl'>Cathub</h2>
      <article className='bg-yellow-700 w-fit rounded-lg flex flex-col items-center text-xl p-4'>
        <h3>Featured Cat:</h3>
        <p>Oscar</p>
        <img alt='oscar the cat' className='rounded-full w-20 h-20 bg-red-500'></img>
        <p>Favorite food: Kraft Singles</p>
        <p>Superpower: Super strength and speed at 2AM.</p>
        <p>Origin Story: lorem blah blah blag</p>
      </article>
      </section>
    </div>
  )
}

export default Cats
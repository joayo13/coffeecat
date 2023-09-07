import React from 'react'

function Cats() {
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='flex flex-col w-full items-center py-2 px-2'>
        <strong className='text-xl pb-2 md:text-6xl max-w-lg'>Cat of the year- Mr. Poopy Boy</strong>
        <img className='md:max-w-lg py-2' alt='poo' src='https://www.onegreenplanet.org/wp-content/uploads/2014/07/m1lead.jpg'></img>
        <p className='max-w-lg py-2'>Incididunt Lorem laboris minim excepteur eiusmod mollit qui elit incididunt ad exercitation qui labore.
         Qui qui irure amet incididunt. Sit commodo consectetur aute esse.
          Nulla aliquip enim non tempor non nisi velit deserunt. Ea irure sint laborum deserunt est ad culpa. Adipisicing in eu officia quis ullamco.</p>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Favorite Food:</strong>
          <p>Tacos</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Superpower:</strong>
          <p>Smelling up the house at 1am</p>
        </span>
        </section>
    </div>
  )
}

export default Cats
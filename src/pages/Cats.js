import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'

function Cats() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='flex flex-col w-full items-center py-2 px-2'>
        <strong className='text-3xl text-center pb-2 md:text-6xl max-w-lg'>Cat of the year- Mr. Poopy Boy</strong>
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
        <section className='flex flex-col w-full items-center py-2 px-2'>
        <strong className='text-3xl text-center pb-2 md:text-6xl max-w-lg'>Loudest Meow- Turk</strong>
        <img className='md:max-w-lg py-2' alt='poo' src='https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/images/turkish-van-cat-lying-on-bed.jpg'></img>
        <p className='max-w-lg py-2'>Incididunt Lorem laboris minim excepteur eiusmod mollit qui elit incididunt ad exercitation qui labore.
         Qui qui irure amet incididunt. Sit commodo consectetur aute esse.
          Nulla aliquip enim non tempor non nisi velit deserunt. Ea irure sint laborum deserunt est ad culpa. Adipisicing in eu officia quis ullamco.</p>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Favorite Food:</strong>
          <p>Beans</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Superpower:</strong>
          <p>Licking all the salt off your fingers in 0.3 seconds</p>
        </span>
        </section>
        <section className='flex flex-col w-full items-center py-2 px-2'>
        <strong className='text-3xl text-center pb-2 md:text-6xl max-w-lg'>Highest Jump- Benji</strong>
        <img className='md:max-w-lg py-2' alt='poo' src='https://www.thesprucepets.com/thmb/2k2htmw3td3UE3CM9BNx7Yl5Rdo=/2750x0/filters:no_upscale():strip_icc()/are-calico-cats-always-female-3384568-hero-5103f8c4cf584988905599bdba0cab72.jpg'></img>
        <p className='max-w-lg py-2'>Incididunt Lorem laboris minim excepteur eiusmod mollit qui elit incididunt ad exercitation qui labore.
         Qui qui irure amet incididunt. Sit commodo consectetur aute esse.
          Nulla aliquip enim non tempor non nisi velit deserunt. Ea irure sint laborum deserunt est ad culpa. Adipisicing in eu officia quis ullamco.</p>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Favorite Food:</strong>
          <p>Tostitos</p>
        </span>
        <span className='w-full max-w-lg flex gap-2'>
          <strong>Superpower:</strong>
          <p>Extremely high catnip tolerance</p>
        </span>
        </section>
    </div>
  )
}

export default Cats
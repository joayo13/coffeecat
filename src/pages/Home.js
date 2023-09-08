import React from 'react'
import { Link } from 'react-router-dom'
function Home() {

  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <div className='w-full parallax' alt='cats in space'></div>
      <section className='px-2 text-xl md:text-lg relative'>
        <h1 className='text-4xl md:text-7xl text-center py-4'><strong>Coffee Cat</strong></h1>
        <div className=' max-w-xl mx-auto'>
        <p>Here at Coffee Cat our mission is simple:
        <strong> Take over all of humanity and replace humans with AI-enhanced cat cyborgs.</strong></p>
        <p>In all seriousness, our team of experts have searched the globe for the best coffees and teas and put them all right here for your convenience. 
          Don't believe us? Well take a look at some of our non-paid-off customer reviews and you might just think twice.</p>
        </div>
      </section>
      <h2 className='text-4xl md:text-7xl text-center py-4 customer-reviews'>Customer Reviews</h2>
      <ul className='px-2 w-full flex flex-col md:flex-row gap-2 text-xl md:text-center md:text-3xl md:justify-evenly'>
        <li className='flex flex-col flex-1 md:items-center gap-2 py-4 px-4 bg-gradient-to-r from-yellow-900 to-neutral-800 rounded-lg'>
          <h3>John</h3>
          <h4 className='text-sm'>Iowa City, Iowa</h4>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src='https://media.istockphoto.com/id/926092800/photo/portrait-of-a-scottish-straight-cat-with-glasses.jpg?s=612x612&w=0&k=20&c=MvWk4Noy1P27CwNh2UVHoFQ-yuKsFn92PZN8vOz8GCE='
              alt='john the cat from iowa'
              className='rounded-full h-12 w-12 md:h-24 md:w-24 object-cover'>
            </img>
            <strong>"Yeah probably the best coffee I've ever tasted hands down."</strong>
          </div>
        </li>
        <li className='flex flex-col flex-1 md:items-center gap-2 py-4 px-4 bg-gradient-to-r from-yellow-900 to-neutral-800 rounded-lg'>
          <h3>Billy</h3>
          <h4 className='text-sm'>Detroit, Michigan</h4>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src='https://www.onegreenplanet.org/wp-content/uploads/2014/07/m1lead.jpg'
              alt='billy the cat from toronto'
              className='rounded-full h-12 w-12 md:h-24 md:w-24 object-cover'></img>
            <strong>"I liked the tea."</strong>
          </div>
        </li>
        <li className='flex flex-col flex-1 md:items-center gap-2 py-4 px-4 bg-gradient-to-r from-yellow-900 to-neutral-800 rounded-lg'>
          <h3>Bart</h3>
          <h4 className='text-sm opacity-50'>Toronto, Ontario</h4>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src='https://www.catster.com/wp-content/uploads/2018/06/Cat-screaming-mouth-open-making-noise.jpg.optimal.jpg'
              alt='bart the cat from detroit'
              className='object-cover rounded-full h-12 w-12 md:h-24 md:w-24'>
            </img>
            <strong>"$%^&# *&^Y$# &*$!!!!!!"</strong>
          </div>
        </li>
      </ul>
      <section className='relative bg-yellow-900'>
      <div class="custom-shape-divider-top-1692912622">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <h2 className='text-4xl md:text-7xl text-center py-4 relative z-10'><strong>So what are you waiting for? Lets get to shopping.</strong></h2>
        <ul className='flex w-full gap-2 items-center md:flex-row md:justify-evenly py-8 px-2 flex-col relative z-10'>
          <div className='w-full'>
            <div className='coffee-shop-background h-36 md:h-64 w-full rounded-t-md overflow-hidden'></div>
            <div className='bg-neutral-900 rounded-b-md text-base p-2'>
              <strong className='text-lg'>Cat Café</strong>
              <span className='flex justify-between items-end'>
                <p>Indulge in the world of limited "Meowsterpiece" coffee blends, lovingly crafted to celebrate the art of coffee.</p>
                <Link to='/coffees' className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-md'>Shop</Link>
              </span>
            </div>
          </div>
          <div className='w-full rounded-md'>
            <div className='tea-shop-background h-36 md:h-64 w-full rounded-t-md overflow-hidden'></div>
            <div className='bg-neutral-900 rounded-b-md text-base p-2'>
              <strong className='text-lg'>The Tea Kattle</strong>
              <span className='flex justify-between items-end'>
                <p>Explore our extensive online selection of exquisite teas, each thoughtfully curated to satisfy every palate.</p>
                <Link to='/teas' className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-md'>Shop</Link>
              </span>
              </div>
          </div>
          <div className='w-full'>
            <div className='cat-hub-background h-36 md:h-64 w-full rounded-t-md overflow-hidden'></div>
            <div className='bg-neutral-900 rounded-b-md text-base p-2'>
              <strong className='text-lg'>The Cathub</strong>
              <span className='flex justify-between items-end'>
                <p>Come join us in applauding the extraordinary cats who make our lives better and brighter, one purr at a time. </p>
                <Link to='/cats' className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-md'>Visit</Link>
              </span>
              </div>
          </div>
        </ul>
        
      </section>
    </div>
  )
}

export default Home
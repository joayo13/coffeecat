import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../helpers/scrollToTop'
import catHeadWithFace from '../images/catHeadWithFace.png'
import sirThomas from '../images/sir-thomas.jpg'
import peter from '../images/peter.jpg'
import bart from '../images/bart.jpg'
function Home() {
  useEffect(() => {
    scrollToTop()
  },[])
  const [catHeadLoaded, setCatHeadLoaded] = useState(false)

  return (
    <div className='bg-neutral-900 text-neutral-300 pt-16'>
      
      
      <div className='w-full parallax relative' alt='cat in shopwindow'>
      <div className='absolute w-full h-full bg-neutral-950 opacity-30'></div>
      <h2 className='text-7xl text-center absolute left-1/2 font-extrabold -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-lg'>Coffee with a Purrpose.</h2>
      </div>
      <section className='px-4 text-xl md:text-lg relative'>
        <img className='absolute -top-28 left-1/2 -translate-x-1/2' src={catHeadWithFace} alt='cats head'></img>
        
        
        <div className='pt-12 max-w-3xl mx-auto relative'>
        <p>We believe in combining our love for exceptional coffee with our passion for helping our feline friends.
            For every purchase made, a portion of the proceeds is donated to local cat shelters. Our mission is to support the well-being of cats in need,
             ensuring they receive the care, love, and shelter they deserve. Join us in making a positive impact, one cup at a time.
              Enjoy your coffee, and feel good knowing you're helping to create a better world for cats everywhere.</p>
        </div>
      </section>
      <h2 className='text-4xl md:text-7xl text-center py-4 pacifico'>Customer Reviews</h2>
      <ul className='px-2 w-full flex flex-col md:flex-row gap-2 text-xl md:text-center md:text-3xl md:justify-evenly'>
        <li className='flex flex-col flex-1 md:items-center gap-2 py-4 px-4 bg-gradient-to-b from-yellow-900 to-neutral-900 rounded-lg'>
          <h3>Peter</h3>
          <h4 className='text-sm'>Amsterdam, Netherlands</h4>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src={peter}
              alt='peter the cat from amsterdam'
              loading='lazy'
              className='rounded-full h-12 w-12 md:h-24 md:w-24 object-cover'>
            </img>
            <strong>"Yeah probably the best coffee I've ever tasted hands down."</strong>
          </div>
        </li>
        <li className='flex flex-col flex-1 md:items-center gap-2 py-4 px-4 bg-gradient-to-b from-yellow-900 to-neutral-900 rounded-lg'>
          <h3>Sir Thomas</h3>
          <h4 className='text-sm'>London, England</h4>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src={sirThomas}
              alt='sir thomas the cat from toronto'
              loading='lazy'
              className='rounded-full h-12 w-12 md:h-24 md:w-24 object-cover'></img>
            <strong>"I liked the mugs."</strong>
          </div>
        </li>
        <li className='flex flex-col flex-1 md:items-center gap-2 py-4 px-4 bg-gradient-to-b from-yellow-900 to-neutral-900 rounded-lg'>
          <h3>Bart</h3>
          <h4 className='text-sm'>Toronto, Ontario</h4>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src={bart}
              alt='bart the cat from detroit'
              loading='lazy'
              className='object-cover rounded-full h-12 w-12 md:h-24 md:w-24'>
            </img>
            <strong>"F&#K Y&* M*%#ERF*KR!!!!!"</strong>
          </div>
        </li>
      </ul>
      <section className='relative bg-yellow-900'>
      <div class="custom-shape-divider-top-1692912622">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <h2 className='text-4xl md:text-7xl text-center py-4 relative'><strong>So what are you waiting for? Lets get to shopping.</strong></h2>
        <section className='flex w-full gap-2 items-center md:flex-row md:justify-evenly py-8 px-2 flex-col relative'>
          <div className='w-full'>
            <div className='coffee-shop-background relative h-48 md:h-96 w-full rounded-md overflow-hidden'>
            <div className='absolute bg-black bg-opacity-80 bottom-0 rounded-b-md text-base p-2'>
              <strong className='text-lg'>Cat Café</strong>
              <span className='flex justify-between items-end'>
                <p>Indulge in the world of limited "Meowsterpiece" coffee blends, lovingly crafted to celebrate the art of coffee.</p>
                <Link to='/coffees' className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-md'>Shop</Link>
              </span>
            </div>
            </div>
          </div>
          <div className='w-full rounded-md'>
            <div className='tea-shop-background relative h-48 md:h-96 w-full rounded-md overflow-hidden'>
            <div className='bg-black absolute bottom-0 bg-opacity-80 rounded-b-md text-base p-2'>
              <strong className='text-lg'>The Catalog</strong>
              <span className='flex justify-between items-end'>
                <p>Explore a world of whimsical and stylish cat-themed merchandise, from cozy sweaters to cute coffee mugs.</p>
                <Link to='/catalog' className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-md'>Shop</Link>
              </span>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='cat-hub-background relative h-48 md:h-96 w-full rounded-md overflow-hidden'>
            <div className='bg-black bg-opacity-80 absolute bottom-0 rounded-b-md text-base p-2'>
              <strong className='text-lg'>Top Cats</strong>
              <span className='flex justify-between items-end'>
                <p>Come join us in applauding the extraordinary cats who make our lives better and brighter, one purr at a time. </p>
                <Link to='/cats' className='bg-neutral-300 text-neutral-800 font-extrabold py-2 px-4 rounded-md'>Visit</Link>
              </span>
              </div>
            </div>
          </div>
        </section>
        
      </section>
    </div>
  )
}

export default Home
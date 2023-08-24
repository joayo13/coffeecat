import React from 'react'
import { Link } from 'react-router-dom'
import catsInSpace from '../catsinspace.jpg'
function Home() {
  return (
    <div className='bg-neutral-900 text-neutral-50'>
      <img src={catsInSpace} className='w-full' alt='cats in space'></img>
      <section className='px-2 text-xl md:text-center md:text-3xl'>
        <h1 className='text-6xl md:text-9xl text-center py-4'>Coffee Cat</h1>
        <p>Here at Coffee Cat our mission is simple:
        <br></br><strong className='text-red-500'>Take over all of humanity and replace humans with AI-enhanced cat cyborgs.</strong></p>
        <p>In all seriousness, our team of experts have searched the globe for the best coffees and teas and put them all right here for your convenience.</p>
        <br></br>
        <p>Don't believe us? Well then take a look at some of our non-paid-off customer reviews and you might just think twice.</p>
      </section>
      <ul className='px-2 text-xl md:text-center md:text-3xl'>
        <h2 className='text-4xl md:text-7xl text-center py-4'>Customer Reviews</h2>
        <li className='flex flex-col md:items-center gap-2 py-4'>
          <h3 className='underline'>John from Iowa City</h3>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src='https://media.istockphoto.com/id/473619896/photo/cat-fun-picture.webp?b=1&s=170667a&w=0&k=20&c=WToYLrl_oldhPR-i58A3Nk8Fpne4gYDK9VhvZtmurWM='
              alt='john the cat from iowa'
              className='rounded-full h-12 w-12 md:h-24 md:w-24'>
            </img>
            <p>Yeah probably the best coffee I've ever tasted hands down.</p>
          </div>
        </li>
        <li className='flex flex-col md:items-center gap-2 py-4'>
          <h3 className='underline'>Billy from Toronto</h3>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src='https://www.onegreenplanet.org/wp-content/uploads/2014/07/m1lead.jpg'
              alt='billy the cat from toronto'
              className='rounded-full h-12 w-12 md:h-24 md:w-24'></img>
            <p>I liked the tea.</p>
          </div>
        </li>
        <li className='flex flex-col md:items-center gap-2 py-4'>
          <h3 className='underline'>Bart from Detroit</h3>
          <div className='flex md:flex-col gap-2 md:gap-0 items-center'>
            <img 
              src='https://www.catster.com/wp-content/uploads/2018/06/Cat-screaming-mouth-open-making-noise.jpg.optimal.jpg'
              alt='bart the cat from detroit'
              className='rounded-full h-12 w-12 md:h-24 md:w-24'></img>
            <p>$%^&# *&^Y$# &*$!!!!!!</p>
          </div>
        </li>
      </ul>
      <section>
        <h2 className='text-4xl md:text-7xl text-center py-4'>So what are you waiting for? Lets get to shopping.</h2>
        <ul className='flex w-full items-center md:flex-row md:justify-evenly py-8 flex-col'>
          <li><Link className='text-4xl md:text-7xl' to='/coffees'>Shop Coffees</Link></li>
          <li><Link className='text-4xl md:text-7xl' to='/teas'>Shop Teas</Link></li>
        </ul>
      </section>
    </div>
  )
}

export default Home
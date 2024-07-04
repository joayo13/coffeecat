import React, { useEffect, useState } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'
import sirThomas from '../images/sir-thomas.jpg'
import peter from '../images/peter.jpg'
import mcChicken from '../images/mcchicken.jpg'

const CatProfile = ({ name, favoriteFood, superpower, src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className='flex flex-col w-96 mx-auto items-center py-2 px-4'>
      <strong className='text-center pb-2 text-6xl max-w-lg'>{name}</strong>
      {!loaded && <div className='w-96 h-96 bg-neutral-800 animate-pulse'></div>}
      <img
        className={`object-cover w-96 h-96 ${loaded ? '' : 'hidden'}`}
        alt={alt}
        src={src}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      <span className='w-full max-w-lg flex gap-2'>
        <strong>Name:</strong>
        <p>{name}</p>
      </span>
      <span className='w-full max-w-lg flex gap-2'>
        <strong>Favorite Food:</strong>
        <p>{favoriteFood}</p>
      </span>
      <span className='w-full max-w-lg flex gap-2'>
        <strong>Superpower:</strong>
        <p>{superpower}</p>
      </span>
    </section>
  );
};

const CatProfiles = () => {
  return (
    <div className='bg-neutral-900 text-neutral-300 pt-16'>
      <CatProfile
        name='Fastest Cat'
        favoriteFood='Kraft Singles'
        superpower='Super Speed at 1am'
        src={sirThomas}
        alt='sir thomas'
      />
      <CatProfile
        name='Loudest Meow'
        favoriteFood='Chicken'
        superpower='Meowing very loudly'
        src={mcChicken}
        alt='mc chicken'
      />
      <CatProfile
        name='Highest Jump'
        favoriteFood='Doritos'
        superpower='Extremely high catnip tolerance'
        src={peter}
        alt='peter'
      />
      <div className="absolute hidden xl:block right-0 top-0 w-44 h-full side-banner"></div>
      <div className="absolute hidden xl:block left-0 top-0 w-44 h-full side-banner"></div>
    </div>
  );
};
export default CatProfiles
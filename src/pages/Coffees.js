import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../helpers/scrollToTop'
import coffeeItems from '../products/coffeeItems'

function Coffees() {
  useEffect(() => {
    scrollToTop()
  },[])
  const [loading, setLoading] = useState(Array(coffeeItems.length).fill(true));

  const handleImageLoad = (index) => {
    setLoading(prevLoading => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };
  return (
    <div className='bg-neutral-900 text-neutral-300 pt-16'>
      <section className='text-center flex flex-col items-center'>
      <strong className='text-6xl py-2'>Cat Café</strong>
      <h3>All Products</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
      {coffeeItems.map((item, index) => (
            <Link to={`${index}`} key={index}>
              <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
                {loading[index] && (
                  <div className="h-3/4 w-full bg-neutral-800 rounded-lg animate-pulse"></div>
                )}
                <img
                  className={`h-3/4 w-full object-cover ${loading[index] ? 'hidden' : ''}`}
                  alt={item.title}
                  src={item.image}
                  onLoad={() => handleImageLoad(index)}
                />
                <strong>{item.title}</strong>
              </li>
            </Link>
          ))}
      </ul>
      <p>Page 1 of 1</p>
      </section>
      <div className="absolute hidden xl:block right-0 top-0 w-44 h-full side-banner"></div>
    <div className="absolute hidden xl:block left-0 top-0 w-44 h-full side-banner"></div>
    </div>
  )
}

export default Coffees
import React, { useEffect, useState } from 'react'
import CheckoutItem from '../components/CheckoutItem'
import { scrollToTop } from '../helpers/scrollToTop'

function Checkout({cartUpdated, setCartUpdated}) {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [readMore, setReadMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    scrollToTop()
  },[])
  useEffect(() => {
    if(!localStorage.getItem('cart')) {
      return
    }
    const cartData = JSON.parse(localStorage.getItem('cart'))
    setCart(cartData)
    setTotalPrice(cartData.reduce((total, curVal) => total + (curVal.price * curVal.quantity), 0).toFixed(2))
    },[cartUpdated])
    function handlePayment () {
      setIsLoading(true);
      setErrorMessage('');
      fetch("https://quintessential-maize-heart.glitch.me/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: cart,
    }),
    
  })
    .then(res => {
      setIsLoading(false);
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
      
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      setIsLoading(false);
      console.error(e)
      setErrorMessage('Payment failed. Please try again.');
    })
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setErrorMessage('Payment is taking longer than expected. Please try again.');
      }
    }, 10000);
    }
  return (
    <div className='bg-neutral-900 text-neutral-300 pt-16 min-h-screen'>
      <section className="flex flex-col items-center">
      <strong className="text-3xl md:text-6xl py-4 text-center">Checkout</strong>
      <ul className="flex flex-col bg-neutral-800 justify-center rounded-lg gap-2 p-2 flex-wrap">
        {cart.length ? cart.map((item) => (
          <CheckoutItem
            key={item.id} // Ensure unique key for each item
            cartItemData={item}
            totalPrice={totalPrice}
            setCartUpdated={setCartUpdated}
          />
        )) : <p className="text-center">Your cart is empty.</p>}
        <button
          onClick={handlePayment}
          className="bg-neutral-900 font-extrabold text-neutral-300 max-w-fit mx-auto py-2 px-4 flex items-center gap-[0.30rem] rounded-full my-2 h-12"
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <strong>Checkout with</strong>
              <img alt="stripe logo" className="w-10 mt-[0.18rem]" src="https://cdn-icons-png.flaticon.com/512/5968/5968382.png" />
              (${totalPrice})
            </>
          )}
        </button>
        {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
      </ul>
    </section>
      <section className='max-w-xl py-2 px-4 mx-auto'>
        <strong className='text-xl'>Streamlined and Secure Checkout Experience with Stripe</strong>
        <p>Experience the future of online shopping with our secure checkout powered by Stripe! At Coffee Cat,
           we prioritize the safety and convenience of our customers,
            and our checkout process is no exception. With Stripe's cutting-edge payment technology, you can shop with confidence,
             knowing your sensitive information is protected every step of the way.
        </p>
        {!readMore ? <button className='text-indigo-500' onClick={() => setReadMore(true)}>Read More</button> : null}
        { readMore ?
          <div>
        <strong className='text-xl'>Key features:</strong>
        <ul>
          <li><strong>Robust Security:</strong> Stripe employs industry-leading security measures to safeguard your payment information. Our checkout process is fully compliant with Payment Card Industry Data Security Standard (PCI DSS) requirements, ensuring your data is protected from potential threats.</li>
          <li><strong>Seamless Integration:</strong> We've seamlessly integrated Stripe into our checkout process, offering you a smooth and hassle-free experience. Say goodbye to cumbersome forms and enjoy a streamlined payment process that saves you time.</li>
          <li><strong>Multiple Payment Options:</strong> Pay the way you want with a wide range of payment options supported by Stripe. Whether you prefer credit cards, debit cards, Apple Pay, Google Pay, or even Bitcoin, we've got you covered.</li>
          <li><strong>Real-time Validation:</strong> Stripe's real-time validation helps prevent errors and ensures the accuracy of your payment information, reducing the risk of payment failures.</li>
          <li><strong>Mobile-Friendly:</strong> Our Stripe-powered checkout is designed with mobile users in mind. Whether you're shopping on your smartphone or tablet, you'll have the same secure and user-friendly experience.</li>
          <li><strong>Fraud Detection:</strong> Stripe's advanced machine learning algorithms constantly monitor transactions for suspicious activity, providing an additional layer of security against fraud.</li>
          <li><strong>Transparent Pricing:</strong> Rest easy knowing that you won't encounter hidden fees or unexpected charges. Stripe offers transparent pricing, so you know exactly what you're paying for.</li>
          <li><strong>Customer Support:</strong> Should you have any questions or encounter any issues during the checkout process, our dedicated customer support team is here to assist you promptly.</li>
        </ul>
        </div>
        : null
      }
      </section>
      <div className="absolute hidden xl:block right-0 top-0 w-44 h-full side-banner"></div>
    <div className="absolute hidden xl:block left-0 top-0 w-44 h-full side-banner"></div>
    </div>
  )
}

export default Checkout
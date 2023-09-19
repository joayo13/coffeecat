import { Link, Route, Routes } from "react-router-dom";
import Cats from "./pages/Cats";
import Coffees from "./pages/Coffees";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Teas from "./pages/Teas";
import Tea from "./pages/Tea";
import NotFound from "./pages/NotFound";
import catHead from './cathead.png'
import ShoppingCart from "./components/ShoppingCart";
import { useEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Checkout from "./pages/Checkout";




function App() {
  const [shoppingCartActive, setShoppingCartActive] = useState(false)
  const [shoppingCartShowing, setShoppingCartShowing] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
  const [cartUpdated, setCartUpdated] = useState(false)
  useEffect(() => {
    setCartUpdated(false)
  },[cartUpdated])
  return (
    <div className="relative">
    <nav className="nav flex fixed w-full items-center justify-between md:h-32 h-16 px-2 bg-neutral-800 text-neutral-300 z-40">
        <h1 className="text-[2rem] md:text-[4rem]">CC</h1>
        <img alt='cat head' className="absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-16 md:h-16" src={catHead}></img>
      <div className="flex gap-2">
        <button onClick={() => {setMobileMenuActive(false); setShoppingCartActive(true); setShoppingCartShowing(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-16 md:h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        </button>
        <button onClick={() => {setShoppingCartActive(false); setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}>
        <div className="hb w-8 h-8 md:w-16 md:h-16">
          {mobileMenuShowing ? 
          <><div style={ mobileMenuActive ? {animation: 'hb1 0.3s linear forwards'} : {animation: 'hb1r 0.3s linear forwards'}} className="hb1"></div>
          <div style={ mobileMenuActive ? {animation: 'hb2 0.15s linear forwards'} : {animation: 'hb2r 0.15s linear forwards'}} className="hb2"></div>
          <div style={ mobileMenuActive ? {animation: 'hb3 0.3s linear forwards'} : {animation: 'hb3r 0.3s linear forwards'}} className="hb3"></div></>
          : <><div className="hb1"></div>
          <div className="hb2"></div>
          <div className="hb3"></div></>}
          
        </div>
        </button>
      </div>
    </nav>
    {shoppingCartShowing ? <>
      {shoppingCartActive ? <ShoppingCart setShoppingCartActive={setShoppingCartActive} slide={'left'} cartUpdated={cartUpdated}/> : <ShoppingCart slide={'right'} setShoppingCartActive={setShoppingCartActive}/>}
      </> : null}
      {mobileMenuShowing ? <>
      {mobileMenuActive ? <MobileMenu slide={'left'} setMobileMenuActive={setMobileMenuActive}/> : <MobileMenu slide={'right'} setMobileMenuActive={setMobileMenuActive}/>}
      </> : null}
    <div className="md:h-32 h-16"></div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coffees" element={<Coffees/>}/>
      <Route path="/coffees/:id" element={<Coffee setCartUpdated={setCartUpdated} cartUpdated={cartUpdated} setShoppingCartActive={setShoppingCartActive} setShoppingCartShowing={setShoppingCartShowing}/>}/>
      <Route path="/catalog" element={<Teas/>}/>
      <Route path="/catalog/:id" element={<Tea setCartUpdated={setCartUpdated} cartUpdated={cartUpdated} setShoppingCartActive={setShoppingCartActive} setShoppingCartShowing={setShoppingCartShowing}/>}/>
      <Route path="/cats" element={<Cats/>}/>
      <Route path="/checkout" element={<Checkout setCartUpdated={setCartUpdated} cartUpdated={cartUpdated}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <footer className="flex relative items-center justify-evenly px-2 bg-neutral-800 text-neutral-300">
      <ul className="flex flex-col items-center">
      <strong>Coffee Cat</strong>
      <Link to='/privacy'>Privacy Policy</Link>
      <Link to='/tou'>Terms Of Use</Link>
      <Link to='/copyright'>Copyright & Legal</Link>
      </ul>
      <ul className="flex flex-col items-center">
      <strong>Contact</strong>
      <p>123-456-7890</p>
      <p>coffee@cat.com</p>
      <Link to='https://github.com/joayo13'>Github</Link>
      </ul>
    </footer>
    {mobileMenuShowing && mobileMenuActive ? <button onClick={() => setMobileMenuActive(false) } style={{animation: 'fadein 0.3s forwards'}} className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0"></button> : null}
    
    {shoppingCartActive ? <button onClick={() => setShoppingCartActive(false) } style={{animation: 'fadein 0.3s forwards'}} className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0"></button> : null}
    </div>
  );
}

export default App;

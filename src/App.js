import { Link, Route, Routes } from "react-router-dom";
import Cats from "./pages/Cats";
import Coffees from "./pages/Coffees";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Teas from "./pages/Teas";
import Tea from "./pages/Tea";
import NotFound from "./pages/NotFound";
import catHead from './Frame 2.png'
import ShoppingCart from "./components/ShoppingCart";
import { useEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Checkout from "./pages/Checkout";
import cartLogo from './Frame 1 (11).png'
import footerLogo from './Frame 2 (1).png'




function App() {
  const [shoppingCartActive, setShoppingCartActive] = useState(false)
  const [shoppingCartShowing, setShoppingCartShowing] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
  const [cartUpdated, setCartUpdated] = useState(false)
  const [cartLength, setCartLength] = useState(0)
  useEffect(() => {
    setCartLength(JSON.parse(localStorage.getItem('cart')).length)
    setCartUpdated(false)
  },[cartUpdated])
  return (
    <div className="relative">
    <nav className="nav flex fixed w-full items-center justify-between md:h-32 h-16 px-2 bg-neutral-800 text-neutral-300 z-40">
        <div className="flex gap-2 items-center">
        <h1 className="pacifico text-[2rem] md:text-[4rem]">CC</h1>
        <img alt='cat head' className="w-8 h-8 md:w-16 md:h-16" src={catHead}></img>
        </div>
      <div className="flex gap-2">
        <button className="flex justify-center items-center" onClick={() => {setMobileMenuActive(false); setShoppingCartActive(!shoppingCartActive); setShoppingCartShowing(true)}}>
        <img className="w-10 h-[2.15rem] md:w-20 md:h-[4.3rem]" src={cartLogo} alt='shopping cart'></img>
        <strong className="absolute">{cartLength}</strong>
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
    <footer className="flex relative items-center justify-evenly px-2 py-4 bg-neutral-800 text-neutral-300">
      <img src={footerLogo} alt='coffee cat logo' className="w-20 h-20"></img>
      <ul className="flex flex-col items-center">
      <strong>Legal</strong>
      <Link to='/privacy'>Privacy Policy</Link>
      <Link to='/tou'>Terms Of Use</Link>
      <Link to='/copyright'>Copyright</Link>
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

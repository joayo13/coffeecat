import { Link, Route, Routes } from "react-router-dom";
import Cats from "./pages/Cats";
import Coffees from "./pages/Coffees";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Teas from "./pages/Teas";
import Tea from "./pages/Tea";
import NotFound from "./pages/NotFound";
import catMug from './images/catMug.png'
import ShoppingCart from "./components/ShoppingCart";
import { useEffect, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Checkout from "./pages/Checkout";
import footerLogo from './images/catMug2.png'
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Privacy from "./pages/Privacy";
import Tou from "./pages/Tou";
import Copyright from "./pages/Copyright";




function App() {
  const [shoppingCartActive, setShoppingCartActive] = useState(false)
  const [shoppingCartShowing, setShoppingCartShowing] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
  const [cartUpdated, setCartUpdated] = useState(false)
  const [cartLength, setCartLength] = useState(0)
  useEffect(() => {
    setCartLength(JSON.parse(localStorage.getItem('cart'))?.length)
    setCartUpdated(false)
  },[cartUpdated])
  const [scrollDir, setScrollDir] = useState("scrolling up");
  
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.scrollY;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  return (
    <div className="relative">
    <nav style={scrollDir === 'scrolling up' ? {animation: 'slideDown 200ms ease forwards'} : {animation: 'slideUp 200ms ease forwards'}} className="navbar nav flex fixed w-full items-center justify-between h-16 px-2 bg-neutral-950 text-neutral-300 z-40">
        <Link to ='/'>
        <div className="flex gap-2 items-center">
        <img alt='cat head' className="h-12 w-12" src={catMug}></img>
        <p className="pacifico">CoffeeCat</p>
        </div>
        </Link>
        <div className="absolute hidden md:flex gap-8 top-1/2 -translate-y-1/2 text-xl left-1/2 -translate-x-1/2 underline">
          <Link to='/coffees'>Cat Café</Link>
          <Link to='/catalog'>The Catalog</Link>
          <Link to='/cats'>Top Cats</Link>
        </div>
      <div className="flex gap-2">
        <button className="flex justify-center items-center" onClick={() => {setMobileMenuActive(false); setShoppingCartActive(!shoppingCartActive); setShoppingCartShowing(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mb-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        <strong className="absolute">{cartLength}</strong>
        </button>
        <button
					className={`hamburger hamburger--collapse ${mobileMenuActive ? 'is-active' : ''}`}
					onClick={() => {setShoppingCartActive(false); setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}
					aria-expanded={mobileMenuActive ? 'true' : 'false'}
					aria-controls="mobile-menu"
          aria-label="Toggle navigation"
				>
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
      </div>
    </nav>
    {shoppingCartShowing ? <>
      {shoppingCartActive ? <ShoppingCart shoppingCartActive={shoppingCartActive} setShoppingCartActive={setShoppingCartActive} slide={'left'} cartUpdated={cartUpdated}/> : <ShoppingCart slide={'right'} setShoppingCartActive={setShoppingCartActive}/>}
      </> : null}
      {mobileMenuShowing ? <>
      {mobileMenuActive ? <MobileMenu mobileMenuActive={mobileMenuActive} slide={'left'} setMobileMenuActive={setMobileMenuActive}/> : <MobileMenu slide={'right'} setMobileMenuActive={setMobileMenuActive}/>}
      </> : null}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coffees" element={<Coffees/>}/>
      <Route path="/coffees/:id" element={<Coffee setCartUpdated={setCartUpdated} cartUpdated={cartUpdated} setShoppingCartActive={setShoppingCartActive} setShoppingCartShowing={setShoppingCartShowing}/>}/>
      <Route path="/catalog" element={<Teas/>}/>
      <Route path="/catalog/:id" element={<Tea setCartUpdated={setCartUpdated} cartUpdated={cartUpdated} setShoppingCartActive={setShoppingCartActive} setShoppingCartShowing={setShoppingCartShowing}/>}/>
      <Route path="/cats" element={<Cats/>}/>
      <Route path="/checkout" element={<Checkout setCartUpdated={setCartUpdated} cartUpdated={cartUpdated}/>}/>
      <Route path="/cancel" element={<Cancel/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/tou" element={<Tou/>}/>
      <Route path="/copyright" element={<Copyright/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <footer className="flex relative items-center justify-evenly px-2 z-10 py-4 bg-neutral-950 text-neutral-300">
  <img src={footerLogo} alt="Coffee cat logo" className="w-20 h-20" />
  
  <ul className="flex flex-col items-center" aria-labelledby="legal-section">
    <li id="legal-section" className="sr-only">Legal</li>
    <li><strong>Legal</strong></li>
    <li><Link to="/privacy">Privacy Policy</Link></li>
    <li><Link to="/tou">Terms Of Use</Link></li>
    <li><Link to="/copyright">Copyright</Link></li>
  </ul>
  
  <ul className="flex flex-col items-center" aria-labelledby="contact-section">
    <li id="contact-section" className="sr-only">Contact</li>
    <li><strong>Contact</strong></li>
    <li><p>123-456-7890</p></li>
    <li><p>coffee@cat.com</p></li>
    <li><Link to="https://github.com/joayo13">Github</Link></li>
  </ul>
</footer>
    {mobileMenuShowing && mobileMenuActive ? <button aria-controls="shopping-cart-menu" onClick={() => setMobileMenuActive(false) } style={{animation: 'fadein 0.3s forwards'}} className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0"></button> : null}
    
    {shoppingCartActive ? <button onClick={() => setShoppingCartActive(false) } style={{animation: 'fadein 0.3s forwards'}} className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0"></button> : null}
    </div>
  );
}

export default App;

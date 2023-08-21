import { Link, Route, Routes } from "react-router-dom";
import Cats from "./pages/Cats";
import Coffees from "./pages/Coffees";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Teas from "./pages/Teas";
import Tea from "./pages/Tea";
import NotFound from "./pages/NotFound";
import catHead from './cathead.png'


function App() {
  return (
    <>
    <nav className="flex relative items-center justify-between md:h-32 h-16 px-2 bg-gray-800 text-white">
        <h1 className="text-[2rem] md:text-[4rem]">CC</h1>
        <img alt='cat head' className="absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-16 md:h-16" src={catHead}></img>
      <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-16 md:h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-16 md:h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      {/* <ul>
        <Link to="/">Home</Link>
        <Link to="/coffees">Coffees</Link>
        <Link to="/teas">Teas</Link>
        <Link to="/cats">Cats</Link>
      </ul> */}
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coffees" element={<Coffees/>}/>
      <Route path="/coffees/:id" element={<Coffee/>}/>
      <Route path="/teas" element={<Teas/>}/>
      <Route path="/teas/:id" element={<Tea/>}/>
      <Route path="/cats" element={<Cats/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;

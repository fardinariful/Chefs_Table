import { FaRegCircleUser } from "react-icons/fa6";
import './Header.css'
// import { CiSearch } from "react-icons/ci";
const Header = () => {
   
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">The Culinary Canvas</a>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-xl">
      <li><a>Home</a></li>
      <li><a>Recipes </a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <div>
    <input className="border border-gray-400 rounded-lg p-1"  type="text" name="" id="" placeholder="Search"  />
    {/* <CiSearch></CiSearch> */}
    </div>
   
   <span className="text-3xl">  <FaRegCircleUser></FaRegCircleUser></span>
  
  </div>
    </div>
     <div className=" background ">
        <div className="text-center flex flex-col items-center justify-center h-full">
        <p className="text-5xl text-white font-semibold">Your Culinary Adventure <br /> Begins Here</p>
        <p className="p-8 text-white text-xl">Embark on a journey of flavors where every dish is crafted with passion and precision. Discover unique tastes, fresh ingredients, and exquisite presentations that turn every meal into a memorable experience.</p>
        <div className="flex flex-row gap-3">
        <button className="btn btn-outline btn-accent ">Explore Now</button>
        <button className="btn btn-outline btn-accent">Our Feedback</button>
        
        </div>
       
        </div>
     
    </div>
</>
    );
};

export default Header;
import { FaRegCircleUser } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
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
    );
};

export default Header;
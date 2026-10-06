import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 px-2 sm:px-4 font-medium bg-white my-2">
      {/* Company Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-32 sm:w-36" />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-5 lg:gap-8 text-sm text-black px-5">
        {["HOME", "ABOUT", "COLLECTION", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            className="group flex flex-col items-center gap-1"
            to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
          >
            {({ isActive }) => (
              <>
                <p className="text-[15px] tracking-wide">{item}</p>
                <div
                  className={`h-[1.5px] bg-gray-700 transition-all duration-300 ease-in-out ${
                    isActive ? "w-2/4" : "w-0 group-hover:w-2/4"
                  }`}
                ></div>
              </>
            )}
          </NavLink>
        ))}
      </ul>

      {/* Right Side Icons & Search */}
      <div className="flex items-center gap-5 sm:gap-6">
        {/* Professional Search Bar (Desktop) */}
        <div className="hidden sm:flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 focus-within:border-black focus-within:bg-white transition-all duration-300">
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 opacity-60 text-black"
          />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-20 lg:w-32 focus:w-48 transition-all duration-300 text-black "
          />
        </div>

        {/* Search Icon (Mobile Only) */}
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer sm:hidden opacity-80 hover:opacity-100"
          onClick={() => setShowSearch(!showSearch)}
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="user"
            className="w-5 cursor-pointer opacity-80 hover:opacity-100"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-40">
            <div className="flex flex-col gap-3 w-36 py-3 px-5 bg-white shadow-lg border border-gray-100 text-gray-500 rounded-md">
              <Link
                to="/profile"
                className="hover:text-black transition-colors block"
              >
                Profile
              </Link>
              <Link
                to="/orders"
                className="hover:text-black transition-colors block"
              >
                Orders
              </Link>
              <Link
                to="/logout"
                className="hover:text-black transition-colors block"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="w-5 min-w-5 opacity-80 hover:opacity-100"
          />
          <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            1
          </p>
        </Link>

        {/* Mobile Menu Toggle Icon */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer md:hidden opacity-80 hover:opacity-100"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Search Dropdown (Toggled via Icon) */}
      <div
        className={`absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out z-30 sm:hidden ${
          showSearch
            ? "max-h-20 border-b border-gray-100 opacity-100 py-3 px-4 shadow-sm"
            : "max-h-0 opacity-0 overflow-hidden py-0 px-4"
        }`}
      >
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border border-gray-200 focus-within:border-gray-400 focus-within:bg-white transition-all duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 opacity-60"
          />
        </div>
      </div>

      {/* Side bar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 shadow-2xl ${
          visible ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            className="flex items-center gap-4 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="back"
              className="h-4 rotate-180 opacity-70"
            />
            <p className="text-gray-700 font-medium">Back</p>
          </div>

          <div className="flex flex-col pt-2">
            {["Home", "About", "Collection", "Contact"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `py-3 pl-6 border-b border-gray-50 transition-colors ${
                    isActive
                      ? "bg-gray-50 text-black border-r-4 border-r-black"
                      : "hover:bg-gray-50 hover:text-black"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

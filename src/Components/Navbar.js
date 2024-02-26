import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between  p-5 px-5 md:px-32 bg-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="mt-1">
          <Link to="/" className=" font-semibold text-3xl  p-1 cursor-pointer text-[#f0a500]">
            Album<span className="text-[#fff] text-3xl" >SHARE</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
        
          <Link
            to="/explore"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-[#f0a500] py-2 px-5 rounded-lg mt-1 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-white transition-all"
          >
            New album
          </Link>
          
          <Link
            to="/login"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-[#fff] py-2 px-5 rounded-lg mt-1 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-black transition-all"
          >
            Login
          </Link>
         
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Courses
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <Outlet />
    </div>
    
  );
};

export default Navbar;
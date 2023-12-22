import React, { useState, useEffect, useRef } from "react";
import NavLink from "./element/NavLink";
import { Link } from "react-router-dom";

function Header() {
  const [navMenu, setNavMenu] = useState(false);
  const menuRef = useRef();

  function handleNav() {
    setNavMenu(!navMenu);
  }

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNavMenu(false);
      }
    };
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);
  

  return (
    <section className="w-full flex justify-center items-center py-3 fixed navBarActive">
      <div className="container px-3 flex justify-between items-center">
        <div className="nav-tittle flex items-center">
         <h1 className="headerTittle text-primary">MyMath</h1>
        </div>
        <NavLink style="hidden md:flex flex-row gap-2" />
        <Link
          to="/contact"
          className="hover:-translate-y-1 ease-in-out duration-700 hidden md:flex headerBtn p-2 text-center bg-primary hover:bg-opacity-80 rounded-md text-white"
        >
          Contact Me
        </Link>
        <div ref={menuRef} className="md:hidden">
          <button className="md:hidden flex " onClick={handleNav}>
            {!navMenu ? (
              <img className="max-w-[40px]" src="/img/Menu.png" alt="" />
            ) : (
              <img className="max-w-[40px]" src="/img/Multiply.png" alt="" />
            )}
          </button>
          <div
            className={`absolute w-[250px] h-[100vh] flex flex-col p-4 top-0 bg-white shadow-md  justify-between md:hidden ease-in-out duration-700 ${
              !navMenu ? "-left-full" : "left-0"
            }`}
          >
            <NavLink style="flex sm:flex flex-col gap-4" />
            <Link
              to="/contact"
              className="hover:-translate-y-1 ease-in-out duration-700 flex self-center headerBtn p-2 text-center bg-primary hover:bg-opacity-80 rounded-md text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

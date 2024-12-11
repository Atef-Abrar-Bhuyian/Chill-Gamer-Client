import React from "react";
import { TbDeviceGamepad2 } from "react-icons/tb";
import ThemeController from "../ThemeController.jsx/ThemeController";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={({ isActive }) =>
          isActive
            ? 'text-green-300 font-bold bg-green-700 bg-opacity-50'
            : 'text-green-500 bg-green-700'
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allgames"} className={({ isActive }) =>
          isActive
            ? 'text-green-300 font-bold bg-green-700 bg-opacity-50'
            : 'text-green-500 bg-green-700'
        }>All Games</NavLink>
      </li>
    </>
  );
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
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <TbDeviceGamepad2 />
          Chill Gamer
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <ThemeController></ThemeController>
        <a className="btn">Button</a>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

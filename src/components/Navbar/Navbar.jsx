import React, { useContext } from "react";
import { TbDeviceGamepad2 } from "react-icons/tb";
import ThemeController from "../ThemeController.jsx/ThemeController";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, handleLogOut } = useContext(authContext);
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-[#c040ff] font-bold hover:transition hover:duration-100 hover:underline"
              : "text-[#8d23c2]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allreviews"}
          className={({ isActive }) =>
            isActive
              ? "text-[#c040ff] font-bold hover:transition hover:duration-100 hover:underline"
              : "text-[#8d23c2]"
          }
        >
          All Reviews
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to={"/addreview"}
            className={({ isActive }) =>
              isActive
                ? "text-[#c040ff] font-bold hover:transition hover:duration-100 hover:underline"
                : "text-[#8d23c2]"
            }
          >
            Add Review
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            to={"/myreviews"}
            className={({ isActive }) =>
              isActive
                ? "text-[#c040ff] font-bold hover:transition hover:duration-100 hover:underline"
                : "text-[#8d23c2]"
            }
          >
            My Reviews
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={"/mywatchlist"}
            className={({ isActive }) =>
              isActive
                ? "text-[#c040ff] font-bold hover:transition hover:duration-100 hover:underline"
                : "text-[#8d23c2]"
            }
          >
            Game WatchList
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <Tooltip id="profile-tooltip" />
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
            className="menu menu-sm dropdown-content bg-indigo-950 rounded-box z-[10] w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <TbDeviceGamepad2 className="text-purple-400 text-2xl" />
          Chill Gamer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <ThemeController></ThemeController>
        <div className="">
          {user ? (
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex gap-2 items-center">
                {/* Image */}
                <div className="avatar online">
                  <div
                    data-tooltip-id="profile-tooltip"
                    data-tooltip-content={user.displayName}
                    className="w-12 rounded-full"
                  >
                    <img className="cursor-pointer" referrerPolicy="no-referrer" src={user.photoURL} />
                  </div>
                </div>

                {/* Logout btn */}
                <Link
                to={"/"}
                  onClick={handleLogOut}

                  className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white"
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to={"/login"}
                className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn bg-gradient-to-r from-indigo-800 to-purple-800 shadow-purple-700 shadow-md text-white border-purple-500 hover:border-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink";
import logo from "../../assets/car.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };

  const navItem = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to='/allToys'>All Toys</ActiveLink>
      </li>
      {user ? (
        <>
          <li>
            <ActiveLink to="/myToys">My Toys</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/addToy">Add A Toy</ActiveLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="my-bg">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-br from-bdeep to-blight backdrop-blur-2xl rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link className="flex items-center gap-1 text-2xl text-tdeep font-semibold">
            <img src={logo} alt="" className="h-12 rounded-full" />
            <span>TurboToyGarage</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div
              className="dropdown dropdown-end tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring-2 ring-info ring-offset-base-100 ring-offset-2">
                  <img src={user ? user.photoURL : ""} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-outline text-base px-5 my-btn">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

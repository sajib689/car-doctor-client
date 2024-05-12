import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user ? (
        <li>
          <Link to="/myservices">My Service</Link>
        </li>
      ) : (
        ""
      )}

      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );
  const handleSignOut = () => {
    logout();
  };
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar me-2">
              <div className="w-12">
                <img className="rounded-full" src={user?.photoURL} />
              </div>
            </div>
            <Link className="btn btn-warning text-white me-2">Appointment</Link>
            <Link
              onClick={handleSignOut}
              className="btn btn-warning text-white"
            >
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-orange-500 hover:bg-orange-500 text-white me-2"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn bg-orange-500 hover:bg-orange-500 text-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

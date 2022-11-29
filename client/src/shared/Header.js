import { Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo/logo.png";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const activeStyle = {
    backgroundColor:'#00C6C5',
    color:'white'
  };

  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        toast.success("User logged Out Successfully");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <Navbar rounded={true} className="pb-8 sticky top-0 z-50 shadow-lg" >
      <Link to='/'>
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-9 lg:h-12 rounded-full"
          alt="CRUD Logo"
        />
        <span className="self-center whitespace-nowrap text-md lg:text-xl font-semibold dark:text-white">
          ROZA'S FLAVOR FUSION
        </span>
      </Navbar.Brand>
      </Link>
      <div className="flex md:order-2 gap-2">
        <Tooltip content={user?.displayName ? user.displayName : "Mr X"}>
          {user?.photoURL ? (
            <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              alt=""
              className="w-10 rounded-full"
            />
          )}
        </Tooltip>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="text-xl bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white"
        >
          <button>Home</button>
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="text-xl bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white sm:mt-8 lg:mt-0"
        >
          <button className="">Blog</button>
        </NavLink>
        {user ? (
          <>
            <NavLink
              className="text-xl bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white sm:mt-4 lg:mt-0"
              to="/add-service"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button className="">Add Services</button>
            </NavLink>
            <NavLink
              className="text-xl bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white sm:mt-4 lg:mt-0"
              to="/user-reviews"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button className="">My Reviews</button>
            </NavLink>
            <Link className="text-xl bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white sm:mt-4 lg:mt-0">
              <button className="" onClick={handleLogOut}>
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            <NavLink className="text-xl" to="/login">
              <button className="bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white">Login</button>
            </NavLink>
            <NavLink className="text-xl" to="/register">
              <button className="bg-gray-100 px-3 py-2 rounded-lg border-2 hover:bg-green-600 hover:text-white">Register</button>
            </NavLink>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

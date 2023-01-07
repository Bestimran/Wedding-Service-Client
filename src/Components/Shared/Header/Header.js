import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assest/logo.jpg";
import { AuthContext } from "../../../authProvider/AuthProvider";

// className="max-w-screen-xl mx-auto"

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-xl fw-bold">
          Home
        </Link>
      </li>

      <li>
        <Link to="/service" className="text-xl">
          Services
        </Link>
      </li>
      <li>{user?.displayName}</li>
      <li>
        <Link to="/blog" className="text-xl">
          Blog
        </Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/addservice" className="text-xl">
              Add Services
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="text-xl">
              singOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/Login" className="text-xl">
              Login
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="text-xl">
              SignUp
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-success">
      <div className=" flex justify-between text-primary-content items-center max-w-screen-xl mx-auto">
        <div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img
              className="lg:w-[100px] md:w-[75px] w-[10px] h-[50px] rounded-full mr-2"
              src={logo}
              alt=""
            />
            <span className="text-3xl font-bold font-serif">Wedding.Com</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

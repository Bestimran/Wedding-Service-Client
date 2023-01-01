import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assest/logo.jpg";

// className="max-w-screen-xl mx-auto"

const Header = () => {
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
      <div>
        <ul className="flex justify-end mx-auto gap-3">
        <li>
          <Link to='/' className="text-xl fw-bold">Home</Link>
        </li>
        <li>
          <Link to='/service' className="text-xl">Services</Link>
        </li>
        <li>
          <Link to='/blog' className="text-xl">Blog</Link>
        </li>
        </ul>
      </div>
    </div>
</div>
  );
};

export default Header;

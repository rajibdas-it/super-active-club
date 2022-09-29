import React from "react";
import logo from "./logo.png";
const Header = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="navbar bg-base-100">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-full" src={logo} alt="" />
          <p className="text-2xl font-bold text-blue-400">Super Active Club</p>
        </a>
      </div>
    </div>
  );
};

export default Header;

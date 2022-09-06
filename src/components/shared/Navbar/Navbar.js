import React from "react";
import "./Navbar.css";
import { HiChevronDown } from "react-icons/hi";
import { RiHome6Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <li className="home-btn">
            <RiHome6Fill className="home-icon"></RiHome6Fill> Estatery
          </li>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>
            Manage Property <HiChevronDown></HiChevronDown>
          </li>
          <li>
            Resources <HiChevronDown></HiChevronDown>
          </li>
        </ul>
        <div>
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

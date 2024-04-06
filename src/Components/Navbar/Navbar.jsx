import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navContainerTop">
        <ul>
          <li>jurismaxllp@gmail.com</li>
          <li className=" middle">A COMPLETE ONLINE LEGAL SOLUTIONS COMPANY</li>
          <li>+91 9985801074</li>
        </ul>
      </div>
      <div className="navContainerBottom">
        <ul>
          <li>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </li>
          <li>
            <GiHamburgerMenu
              className="hamburger"
              onClick={() => setHamburger(!hamburger)}
            />
          </li>
          <div className="navList">
            <li>
              <a href="/legalpage" target="_blank">
                LEGAL OPINION
              </a>
            </li>
            <li>LEGAL DRAFTING</li>
            <li>KEY DOCUMENTS</li>
            <li>RESOURCE/ARTICLES</li>
            <li onClick={() => setHamburger(false)}>
              <Link to={"/login"}>LOGIN</Link>
            </li>

            {
              name?
              (<Link to="/"><li>Logout</li></Link>) : (<Link to="/"><li>Login</li></Link>)
            }
          </div>
        </ul>
        {hamburger && (
          <div className="mobileList">
            <li>
              <a href="/legalpage" target="_blank">
                LEGAL OPINION
              </a>
            </li>
            <li>LEGAL DRAFTING</li>
            <li>KEY DOCUMENTS</li>
            <li>RESOURCE/ARTICLES</li>
            <li onClick={() => setHamburger(false)}>
              <Link to={"/login"}>LOGIN</Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

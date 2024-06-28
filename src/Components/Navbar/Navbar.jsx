import React, { useState } from "react";
import "./navbar.css";
// import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
// import { FaLocationDot } from "react-icons/fa6";
import legal from "../../assets/legal.png";
import { FaMobileRetro } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";


const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navContainerTop">
        <div>
          {/* <li>legaltitle.in@gmail.com</li> */}
          <p><HiOutlineMailOpen size={30} style={{marginBottom:"-8px"}}/>legaltitle.in@gmail.com</p>
          
          <li className="middle">A TITLE INVESTIGATION COMPANY</li>
          {/* <li>+91 9985801074</li> */}
          
          <p><FaMobileRetro size={30}/> <span >+91 9985801074</span> </p>
        </div>
      </div>
      <div className="navContainerBottom">
        <ul>
          {/* <li>
            <Link to={"/"}>
              <img src={legal} alt="" />
            </Link>
          </li> */}
          <li>
            <GiHamburgerMenu
              className="hamburger"
              onClick={() => setHamburger(!hamburger)}
            />
          </li>
          <div className="navList">
            <li>
              <button><a href="/">TitleReport</a></button>
            </li>
            {/* <li>
              <a href="/legalpage">Technical Report</a>
            </li> */}
            <li>
              <a href="#">
                Partner With Us 
                {/* <IoMdArrowDropdown className="icon" /> */}
              </a>
              <ul className="dropdown_menu">
                <li>
                  <a href="/nbfc">For NBFC</a>
                </li>
                <li>
                  <a href="/banks">For Banks</a>
                </li>
                {/* <li><a href="#">For Advocates</a></li> */}
              </ul>
            </li>
            <img src={legal} alt="logo" className="logo" />
            <li>
              <a href="#">Key Documents</a>
              <ul className="dropdown_menu">
                <li>
                  <a href="/keyspage">Page 1</a>
                </li>
                <li>
                  <a href="/pagekeys">Page 2</a>
                </li>
                {/* <li><a href="#">For Advocates</a></li> */}
              </ul>
            </li>
            <li>
              <a href="#">Legal Resource</a>
            </li>
            <li onClick={() => setHamburger(false)}>
              <Link to={"/login"}>LOGIN</Link>
            </li>
          </div>
        </ul>
        {hamburger && (
          <div className="mobileList">
            <li>
              <button><a href="/">Title Report</a></button>
            </li>
            {/* <li>
              <a href="/legalpage">Technical Report</a>
            </li> */}
            <li>
              <a href="#">Partner With Us</a>
            </li>
            {/* <IoMdArrowDropdown className="icon" /> */}
            <ul className="dropdown_menu">
                <li>
                  <a href="/nbfc">For NBFC</a>
                </li>
                <li>
                  <a href="/banks">For Banks</a>
                </li>
              </ul>
            <img src={legal} alt="logo" className="logo" />
            <li>
              <a href="#">Key Documents</a>
              <ul className="dropdown_menu">
                <li>
                  <a href="/keyspage">Page 1</a>
                </li>
                <li>
                  <a href="/pagekeys">Page 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Legal Resource</a>
            </li>
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

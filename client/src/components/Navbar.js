// import React from "react";
// import "../App.css";
// // import logo from "../Components/QSU.png";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     // <div className="Navbar">
//     //     <div className="left">
//     //         <img
//     //         className="img"
//     //         src={logo}
//     //         alt="qsu"
//     //         />

//     //     </div>
//     //     <div className="right">
//     //     <div className="links">
//     //             <a href="Home">Home</a>
//     //             <a href="earaltutorial">Student</a>
//     //             <a href="earaltutorial">Faculty</a>
//     //             <a href="registration">Registration</a>
//     //         </div>
//     //     </div>
//     // </div>

//   );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p>QSU e-Aral</p>
            {/* <i class="fa-brands fa-medapps"></i> */}
            {/* <i class="fab fa-typo3" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                e-Aral Tutorial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

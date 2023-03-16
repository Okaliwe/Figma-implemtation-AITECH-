import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavLinks=()=>(
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#project'>About</a></p>
        <p><a href='#fixtures'>case studies</a></p>
        <p><a href='#possibilty'>Open AI</a></p>
        <p><a href='#post'>Library</a></p>
    </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="fav">
          <div>FAVDAN</div>
        </div>
        <div className="navbar-links_container">
          <NavLinks/>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
           <NavLinks/>
          </div>
          <div className="navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

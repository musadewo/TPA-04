import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Sadewo</h3>
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/AboutPage"}>
          <li>About</li>
        </Link>
        <Link to={"/SkillPage"}>
          <li>Skill</li>
        </Link>
        <Link to={"/BlogPage"}>
          <li>Blog</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <NavLink to={"/"}>Ana Sayfa</NavLink>
        <NavLink to={"/products"}>Ürünler</NavLink>
      </nav>
    </header>
  );
};

export default Header;

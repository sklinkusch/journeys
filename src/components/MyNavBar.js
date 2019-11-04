import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../styles/MyNavBar.scss";

const MyNavBar = () => {
  return (
    <header className="navbar-header">
      <Navbar expand="sm">
        <NavbarBrand href="/">VBB Journeys</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default MyNavBar;

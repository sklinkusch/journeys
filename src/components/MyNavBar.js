import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../styles/MyNavBar.css";

const MyNavBar = () => {
  return (
    <header>
      <Navbar expand="sm">
        <NavbarBrand href="/">VBB Journeys</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default MyNavBar;

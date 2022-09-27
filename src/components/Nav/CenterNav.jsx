import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import TopNavLink from "./TopNavLink";
import "../Nav/CenterNav.css";
import { DropDown2 } from "../DropDown";

import { useDispatch } from "react-redux";

const TopNav = () => {
  const styleNavCenter = {};

  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="container_nav">
      <Container>
        <NavLink to="/" className="navbar-brand logo-icon "></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* --- */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_link">
            <TopNavLink to="/" label="Home " className="me-auto nav_link" />
            {/* <DropDown options = {dropDownList(dispatch)}/>*/}
            <div>
              <DropDown2 />
            </div>
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
            <TopNavLink to="/comments" label="Comment" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;

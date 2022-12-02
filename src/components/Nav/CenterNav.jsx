import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import TopNavLink from "./TopNavLink";
import { DropDown2 } from "../DropDown";
import { useDispatch } from "react-redux";
import "../CssControls/nav-bar.css";

const TopNav = () => {
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="container_nav">
      <Container>
        <NavLink to="/" className="navbar-brand logo-icon "></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav_link">
            <TopNavLink to="/" label="Home " className="me-auto nav_link" />
            <DropDown2 />
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

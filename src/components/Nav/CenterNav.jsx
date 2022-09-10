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
            <TopNavLink to="/" label="Home" />
            {/* <DropDown options = {dropDownList(dispatch)}/>*/}
            <div>
              <DropDown2 />
            </div>
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;

// {/* <Navbar bg="light" expand="lg">
//   <Container>
//     <NavLink to="/" className="navbar-brand logo-icon">
//       {/* BURGER */}
//       <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-center " />
//     </NavLink>
//     <Navbar.Collapse
//       id="basic-navbar-nav"
//       className="d-flex justify-content-center"
//     >
//       <Nav className="me-auto">
//         <TopNavLink to="/" label="Home" />
//         <TopNavLink to="/movies" label="Movies" />
//         <TopNavLink to="/favorites" label="Favorites" />
//         <TopNavLink to="/about" label="About" />
//         {/* DropDown */}
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//         {/* End DropDown */}
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>; */}

import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import {useDispatch , useSelector } from 'react-redux'
import Logo from "../Media/Images/pngwing.com (2).png"
import { toggleShow } from "../../features/LogInSlice";
import ButtonDarkMode from "../buttotDarkMode/ButtonDarkMode";
import "../CssControls/nav-bar.css";

const TopNav = () => {
const isDark = useSelector(state => state.darkMode.isDark);
const dispatch = useDispatch()

  return (
    <Navbar
      className="nav_top"
      bg="light"
      expand="lg"
      style={{ textAlign: "center" }}
    >
      <Container>
        {/* BARD: LOGO + app name */}
        <NavLink to="/" className="navbar-brand justify-content-center top_nav_logo">
          <img src={Logo} alt="Logo" className="img_logo"/>
          <span className="text-muted text_icon"><h1 className="text_icon_m">M</h1><p> ovie</p><h1 className="text_icon_a"> A</h1><p>pp</p></span>
        </NavLink>
        <div className="spacer"></div>
        
        {/* btn darkmode */}
        <ButtonDarkMode/>
        <Link to={"/login"}>
        <button className="btn btn-outline-warning btn_login" onClick={()=>{
          dispatch(toggleShow())
        }}>
          Login</button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default TopNav;

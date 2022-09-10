import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./TopNav.css";
import {useDispatch , useSelector } from 'react-redux'
import { toggleDark } from "../../features/DarkMode-Slice";
import Logo from "../Media/Images/transparent-video-icon-multimedia-icon-film-strip-icon-5f8799e3a233a4.9927522916027222756644.png"
import { toggleShow } from "../../features/LogInSlice";
import ButtonDarkMode from "../buttotDarkMode/ButtonDarkMode"


const TopNav = () => {
const isDark = useSelector(state => state.darkMode.isDark);
const dispatch = useDispatch()

console.log(isDark);
  return (
    <Navbar
      className="nav_top"
      bg="light"
      expand="lg"
      style={{ textAlign: "center" }}
    >
      <Container>
        {/* BARD: LOGO + app name */}
        <NavLink to="/" className="navbar-brand justify-content-center nav_link">
          <img src={Logo} alt="Logo" className="img_logo"/>
          <span className="text-muted text_icon"><h1 className="text_icon_m">M</h1>ovie <h1 className="text_icon_a"> A</h1>pp</span>
        </NavLink>
        <div className="spacer"></div>
        
        {/* btn darkmode */}
        <button className={`${ isDark ? 'btn btn-info btn_taggle' : 'btn btn btn-light btn_taggle'}`} onClick={()=>{
        dispatch(toggleDark())
        }}></button>
       {/* {isDark ? " " : " " } */}

        <Link to={"/login"}>
        <button className="btn btn-outline-warning btn_login" onClick={()=>{
          dispatch(toggleShow())
        }}>
          Login</button>
        </Link>
        <ButtonDarkMode/>
      </Container>
    </Navbar>
  );
};

export default TopNav;

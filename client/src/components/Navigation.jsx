import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Auth from "../utils/auth";

const styles = {
  navbar: {
    backgroundColor: "#FFFFFF",
  },
  link: {
    color: "#2A9DB8",
    fontWeight: "700",
    paddingRight: "2rem",
    cursor: "pointer",
  },
  linkIcons: {
    color: "#FD6801",
    fontWeight: "700",
  },
};

function Navigation(props) {

  function showLogoutNav(){
    if(Auth.loggedIn()){
      return(
        <>
        <NavItem>
          <NavLink style={styles.link} onClick={() => Auth.logout()}>
            Logout
          </NavLink>
        </NavItem>
        </>
      );
    }
  }
  function showMenuNav(){
    if(Auth.loggedIn()){
      return(
        <>
        <NavItem>
          <NavLink style={styles.link} tag={Link} to="/our-menu">
            Our Menu
          </NavLink>
        </NavItem>
        </>
      );
    }
  }

  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const lastHash = useRef("");

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar expand="md" container light style={styles.navbar}>
        <NavbarBrand style={styles.link} tag={Link} to="/" className="me-auto">
          <img
            className="d-inline-block align-top"
            alt="chow-logo-top"
            src="/images/chow-logo.png"
            width="200"
            height="48"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="mx-auto py-5">
            {showMenuNav()}
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/how-it-works">
                How it Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/reviews">
                Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/partner">
                Become our Partner
              </NavLink>
            </NavItem>
            {showLogoutNav()}
          </Nav>
          <Nav navbar className="d-flex flex-row">
            <NavItem className="px-1">
              <NavLink style={styles.linkIcons} tag={Link} to="/our-menu">
                <h4 className="bi bi-search"></h4>
              </NavLink>
            </NavItem>
            <NavItem className="px-1">
              <NavLink style={styles.linkIcons} tag={Link} to="/login">
                <h4 className="bi bi-person"></h4>
              </NavLink>
            </NavItem>
            <NavItem className="px-1">
              <NavLink style={styles.linkIcons} tag={Link} to="/cart">
                <h4 className="bi bi-bag-heart"></h4>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;

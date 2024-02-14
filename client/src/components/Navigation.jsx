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
  cartBadge: {
    position: "absolute",
    top: "0px",
    right: "-8px",
    display: "block",
    borderRadius: "5px",
    backgroundColor: "#2A9DB8",
    color: "#FFFFFF",
    paddingLeft: "4px",
    paddingRight: "4px",
    fontSize: "12px",
  },
};

function Navigation(props) {
  function showLogoutNav() {
    if (Auth.loggedIn()) {
      return (
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
  function showMenuNav() {
    if (Auth.loggedIn()) {
      return (
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

  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return cartItems !== null ? cartItems : [];
  };

  const cartItems = getCartItems();

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

    // update badge
    let quantityHolder = 0;
    for (let cartItem of cartItems) {
      quantityHolder += cartItem.quantity;
    }

    document.getElementById("cartNotif").innerHTML =
      quantityHolder > 0 ? quantityHolder : "";
      
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
              <NavLink style={styles.link} tag={Link} to="/partner">
                Become our Partner
              </NavLink>
            </NavItem>
            {showLogoutNav()}
          </Nav>
          <Nav navbar className="d-flex flex-row">
            <NavItem className="px-1">
              <NavLink style={styles.linkIcons} tag={Link} to="/our-menu">
                <h3 className="bi bi-search"></h3>
              </NavLink>
            </NavItem>
            <NavItem className="px-1">
              <NavLink style={styles.linkIcons} tag={Link} to="/login">
                <h3 className="bi bi-person"></h3>
              </NavLink>
            </NavItem>
            {Auth.loggedIn() ? (
              <NavItem className="px-1">
                <NavLink style={styles.linkIcons} tag={Link} to="/cart">
                  <div style={{ position: "relative" }}>
                    <h3 className="bi bi-bag-heart"></h3>
                    <span style={styles.cartBadge} id="cartNotif"></span>
                  </div>
                </NavLink>
              </NavItem>
            ) : (
              <span className="d-none" id="cartNotif"></span>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;

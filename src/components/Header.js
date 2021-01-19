import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const NavbarContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  a {
    margin: 0 14px;
  }
`;

export default function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;

  // navbar 背景是否顯示
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      variant="dark"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "rgba(55,55,55,0.95)" : "transparent",
      }}
    >
      <Navbar.Brand href="#home">Heidi Liu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavbarContent>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </NavbarContent>
      </Navbar.Collapse>
    </Navbar>
  );
}

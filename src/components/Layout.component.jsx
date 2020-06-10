import * as React from "react";
import "./Layout.css";
import HomeComponent from "./Home.component";
import ServicesComponent from "./Services.component";
import AcadamicsComponent from "./Acadamics.component";
import TimmingsComponent from "./Timming.component";
import ContactComponent from "./Contact";
import scrollToComponent from "react-scroll-to-component";
import { useState, useEffect } from "react";
import logo from "../logo.svg";
// import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollchor from "react-scrollchor";
import { Link } from "react-scroll";
import { Button } from "react-bootstrap";
const LayoutComponent = () => {
  const [show, setShow] = useState(true);
  const [scrollTop, setScrollTop] = useState(window.pageYOffset);
  const [Contct] = useState(React.createRef());

  useEffect(() => {
    const onScroll = (e) => {
      const temp = window.pageYOffset;
      setShow(scrollTop > temp);
      setScrollTop(temp);
    };
    window.addEventListener("scroll", onScroll);
    console.log(show, scrollTop);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <div>
        <div>
          {show
            ? [
                scrollTop <= 100 ? (
                  <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="light"
                    variant="light"
                  >
                    <Navbar.Brand>
                      <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        U5A
                      </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                      id="responsive-navbar-nav"
                      className="justify-content-end"
                    >
                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          OUR SERVICE
                        </Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section3"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          TRAINING
                        </Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section4"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          TIMMING
                        </Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section5"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          CONTACT US
                        </Link>
                      </Nav.Item>
                    </Navbar.Collapse>
                  </Navbar>
                ) : (
                  <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="light"
                    variant="light"
                    fixed="top"
                  >
                    <Navbar.Brand>
                      <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        U5A
                      </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                      id="responsive-navbar-nav"
                      className="justify-content-end"
                    >
                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          OUR SERVICE
                        </Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section3"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          TRAINING
                        </Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section4"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          TIMMING
                        </Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link
                          activeClass="active"
                          to="section5"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          CONTACT US
                        </Link>
                      </Nav.Item>
                    </Navbar.Collapse>
                  </Navbar>
                ),
              ]
            : null}
        </div>
      </div>
      <div id="section1">
        <HomeComponent />
      </div>
      <div id="section2">
        <ServicesComponent />
      </div>
      <div id="section3">
        <AcadamicsComponent />
      </div>
      <div id="section4">
        <TimmingsComponent />
      </div>
      <div id="section5">
        <ContactComponent />
      </div>
    </>
  );
  // }
};
export default LayoutComponent;

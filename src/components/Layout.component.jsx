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
  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.

  Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.
  
  Pellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu.
  
  Odio aenean sed adipiscing diam. Volutpat ac tincidunt vitae semper quis lectus. Tristique magna sit amet purus. Euismod in pellentesque massa placerat duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Orci sagittis eu volutpat odio. Purus faucibus ornare suspendisse sed nisi lacus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Habitant morbi tristique senectus et netus et. Porta non pulvinar neque laoreet suspendisse. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tellus integer feugiat scelerisque varius. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pharetra et ultrices neque ornare aenean euismod. Proin sagittis nisl rhoncus mattis rhoncus.
  
  Nisi quis eleifend quam adipiscing vitae. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Non arcu risus quis varius quam quisque id diam. Pharetra magna ac placerat vestibulum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sed id semper risus in hendrerit gravida. Ultrices eros in cursus turpis massa. Non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor neque vitae tempus quam. Varius quam quisque id diam vel.`;

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

import React from "react";
import Iframe from "react-iframe";
import { Container, Row, Col } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoMail } from 'react-icons/go'
import {FaPhoneAlt} from 'react-icons/fa'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";
import ResponsiveEmbed from "react-responsive-embed"

import "./Contact.css";
const ContactComponent = () => {
  return (
    <div className="container_contact toskew_0">
      <h2 style={{ color: "white" , fontSize:'6vw' }} className=" title1">
        CONTACT US
      </h2>
      <Container>
        <Col>
            {/* <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.692014086999!2d78.56901657762288!3d17.33040293484324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1f9a600101f%3A0x68ecdbead4687145!2su%205%20a!5e0!3m2!1sen!2sin!4v1591543125886!5m2!1sen!2sin"
              width="1080"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            /> */}
            <ResponsiveEmbed src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.692014086999!2d78.56901657762288!3d17.33040293484324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1f9a600101f%3A0x68ecdbead4687145!2su%205%20a!5e0!3m2!1sen!2sin!4v1591543125886!5m2!1sen!2sin' 
            ratio='4:2' />
          </Col>
          <br/>
          <Col style={{ display: "flex",justifyContent:'center',position:'absoulute' }}>
            <a
              href="https://www.facebook.com/"
              className="icons1"
              style={{color:'black'}}

            >
              <FontAwesomeIcon className=".fa"   icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com/"
              className="icons1"
              style={{color:'black'}}
            >
              <FontAwesomeIcon className=".fa"  icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="icons1"
              style={{color:'black' }}

            >
              <FontAwesomeIcon className=".fa" icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="icons1"
              style={{color:'black'}}

            >
              <FontAwesomeIcon className=".fa"  icon={faYoutube} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="icons1"
              style={{color:'black'}}

            >
              <FaPhoneAlt size="2em"/> <span>+91 929939329</span>
              
            </a>
            <a
              href="https://www.youtube.com/"
              className="icons1"
              style={{color:'black'}}

            >
              <GoMail size="2em"/> 
              
            </a>
          </Col>
          
      </Container>
    </div>
  );
};

export default ContactComponent;

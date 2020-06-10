import React from "react";
import "./Services.css";
import Parallax from "react-rellax";
const CoursesComponent = () => (
  <div className="container_1 toskew">
     <div className="tounskew">
      <Parallax speed={-1.5}>
        <div className="tilte_1">Our Service</div>
      </Parallax>
      <Parallax speed={-1}>
        <ul>
          <li className="topics">
            CREATIVE VISUALISATION / VISUAL MERCHANDISE
          </li>
          <li className="topics">
            GRAPHIC DESIGN / WEB DESIGN / ADVERTISEMENTs
          </li>
          <li className="topics">
            PHOTOSHOOTs / VIDEOSHOOTs / PORTFOLIOs /MAKEOVERs
          </li>
          <br />
          <li className="topics">
            PRE VISUALISATIONs / WALK THROUGHs / PRESENTATIONs
          </li>
          <li className="topics">MUSIC COMPOSATIONs / AUDIO & VIDEO EDITING</li>
          <li className="topics">
            GRAPHICS / VISUAL EFFECTs / SPECIAL EFFECTs
          </li>
          <br />
          <li className="topics">
            CONTENT WRITING / SCRIPT WRITING / STORY BOARDING
          </li>
          <li className="topics">
            2D / 3D ANIMATION / VIRTUAL REALITY / MOTION CAPTURE
          </li>
          <li className="topics">
            DIRECTION MANAGEMENT / PRODUCTION MANAGEMENT
          </li>
          <br />
          <li className="topics">SHORT FILMs /INTERVIEWs / DOCUMENTARIES</li>
          <li className="topics">VIDEO ALBUMs / FEATURE FILMs / PRESS MEETs</li>
          <li className="topics">
            INTERIOR DESIGN / SET DESIGN / FASHION DESIGN
          </li>
          <br />
          <li className="topics">
            EVENT MANAGEMENT / ANCHORING / CHOREOGRAPHY
          </li>
          <li className="topics">LED PROJECTION SCREENs / CINEMATOGRAPHY</li>
          <li className="topics">SINGING / DJ SOUND & LIGHTING / MAKEUP</li>
          <br />
        </ul> 
</Parallax>
    </div> 
  </div>
);
export default CoursesComponent;

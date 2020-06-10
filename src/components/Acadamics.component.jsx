import React from "react";
import "./Acadamics.css";
import CardComponent from "./card.component";
import Parallax from "react-rellax";
import guitar from "../guitar_2.jpg";
import piano from "../piano.jpg";
import drums from "../drums.jpg";
import paint from "../paint.jpg";
const AcadamicsComponent = () => {
  return (
    <div className="container_Acadamics skew1">
        {/* <div className="skew1"> */}
          <Parallax speed={-0.1}>
            <div className="title1 unskew1">Courses</div>
          </Parallax>

          <Parallax speed={0}>
            <div
              className="unskew1"
              style={{ display: "flex", flexWrap: "wrap", marginTop: "0px" }}
            >
              <CardComponent name={"GUITAR"} price={2500} img={guitar} />
              <CardComponent name={"KEYBOARD"} price={2500} img={piano} />
              <CardComponent name={"JAZZ DRUMS"} price={3000} img={drums} />
              <CardComponent
                name={"DRAWING AND PAINTING"}
                price={2000}
                img={paint}
              />
            </div>
          </Parallax>
        {/* </div> */}
      </div>
  );
};

export default AcadamicsComponent;

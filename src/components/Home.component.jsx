import React from "react";
import Parallax from "react-rellax";
import "./Home.css";
const HomeComponent = () => {
  return (
    <div as Container className="container_home">
      <div className="content">
        <Parallax speed={-4}>
          <div className="title" class="rellax title" data-rellax-speed="-4">
            U5A
          </div>
          <p className="sub">THE PLANET OF ARTS</p>
          <h6 className="sub1">( SERVING FINE ARTS SINCE 2002 )</h6>
        </Parallax>
      </div>
    </div>
  );
};
export default HomeComponent;

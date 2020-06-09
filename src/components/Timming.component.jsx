import React from "react";
import "./Timming.css";
import Parallax from "react-rellax";
const TimmingsComponent = () => {
  return (
    <div className="container_0 toskew_0">
      <Parallax speed={-0.2}>
        <h1
          style={{
            color: "white",
            fontFamily: "baloo",
            fontSize: "4em",
            margin: 0,
          }}
          className="tounskew_0 title_0"
        >
          TIMINGS
        </h1>
        <h6 className="tounskew_0"
         style={{
            color: "white",
            fontFamily: "baloo",
            fontSize: "2em",
            margin: 0,
            // transform:'skewY(deg)'
          }}>(MON - FRI)</h6>
      </Parallax>

      <Parallax speed={-0.5} >
        <div className="cards tounskew_0 ">
          <div className="card">
            <h2>BATCH -A</h2>
            <span> 6:30 AM to 7:30 AM</span>
          </div>
          <div className="card">
            <h2>BATCH -B</h2>
            <span> 4:30 PM to 5:30 PM</span>
          </div>
          <div className="card">
            <h2>BATCH -C</h2>
            <span> 5:30 PM to 6:30 PM</span>
          </div>
          <div className="card">
            <h2>BATCH -D</h2>
            <span> 6:30 PM to 7:30 PM</span>
          </div>
          <div className="card">
            <h2>BATCH -E</h2>
            <span> 7:30 PM to 8:30 PM</span>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default TimmingsComponent;

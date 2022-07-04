import React from "react";
import "./home.css";
import first from "../assets/images/one.jpg";
import second from "../assets/images/two.jpg";
import third from "../assets/images/three.jpg";
import fourth from "../assets/images/four.jpg";
import fifth from "../assets/images/five.jpg";
import cone from "../assets/images/cone.jpg";
import ctwo from "../assets/images/ctwo.jpg";
import cthree from "../assets/images/cthree.jpg";
import cfour from "../assets/images/cfour.jpg";
import cfive from "../assets/images/cfive.jpg";
import { Link } from "react-router-dom";
export default function Second() {
  return (
    <div className="secondmain" style={{ display: "flex" }}>
      <div className="img1">
        <img src={first} width="100%" />
        <div style={{ margin: "1rem" }}>
          <Link className="linkone" to={"/"}>
            The Coronavirus Exposes <br /> Massive Education Digital <br />
            Generation Gap
          </Link>
        </div>
        <p className="line">APRIL 8,2020</p>
        <p className="linenew">
          Prevention Sugar seems to have developed a reputation as the big bad
          wolf in relation to health. We have...
        </p>
      </div>

      <div
        className="img1_1"
        style={{ display: "flex", flexDirection: "column", marginLeft:'1rem' }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img src={second} width="100%" />
            <Link className="linkone_1" to={"/"}>
              Quarantines Spark Confusion and Worries About Precedent{" "}
            </Link>
          </div>
          <div style={{marginLeft:'1rem'}}>
            <img src={third} width="100%" />
            <Link className="linkone_1" to={"/"}>
              Know the Simptoms: What Will You Do If You Start Coughing?
            </Link>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <img src={fourth} width="100%" />
            <Link className="linkone_1" to={"/"}>
              The Dos and Donts of the ‘Social Distancing’ Behavior
            </Link>
          </div>
          <div style={{marginLeft:'1rem'}}>
            <img src={fifth} width="100%" />
            <Link className="linkone_1" to={"/"}>
              The Healthiest Way to Behave in this Pandemic Situation
            </Link>
          </div>
        </div>
      </div>

      <div style={{ width: "30%", display: "flex", flexDirection: "column", marginLeft:'1rem' }}>
        <div className="box">
          <div>
            <Link className="sidelink" to={"/"}>
              Clinical Research Fails to Provide a Complete COVID19 Pattern
            </Link>
          </div>
          <div className="circle1">
            <img src={cone} />
          </div>
        </div>

        <div className="box_1">
          <div>
            <Link className="sidelink" to={"/"}>
            Survey Reveals Significant Need for Increased Consumer Education
            </Link>
          </div>
          <div className="circle1">
            <img src={ctwo} />
          </div>
        </div>

        <div className="box_1">
          <div>
            <Link className="sidelink" to={"/"}>
            There Isn’t Enough Support for the Severily Affected Businesses
            </Link>
          </div>
          <div className="circle1">
            <img src={cthree} />
          </div>
        </div>

        <div className="box_1">
          <div>
            <Link className="sidelink" to={"/"}>
            Anxiety Research: Your Nose Itches: Allergies, Flu or COVID19?
            </Link>
          </div>
          <div className="circle1">
            <img src={cfour} />
          </div>
        </div>

        <div className="box_1">
          <div>
            <Link className="sidelink" to={"/"}>
            What People Know About the Purpose of Using Hand Sanitizers
            </Link>
          </div>
          <div className="circle1">
            <img src={cfive} />
          </div>
        </div>
      </div>
    </div>
  );
}

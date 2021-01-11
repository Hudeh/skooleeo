import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import team from "./assets/images/team.jpg";
import meeting from "./assets/images/meeting.jpg";
import google from "./assets/images/google.jpg";
import outlook from "./assets/images/outlook.png";
import linkedin from "./assets/images/linkedin.png";
import oneburner from "./assets/images/oneburner.png";

export default function Home() {
  return (
    <>
    <div className="home-container">
      <div className="layout-1">
        <div className="collaborate">
          <div>
            Collaborate with your <br />
            team and get more done.
          </div>
          <p className="subtitle">
            Commuicate effectively with oneburner for easy <br />
            collaboration, team work and remote work.
          </p>
          <button className="btn">
            Start Free Trial <span style={{ marginLeft: "10px", fontSize: "25px" }}>&gt;</span>
          </button>
        </div>
        <div className="team">
          <img src={team} alt="team" />
        </div>
      </div>
      <div className="layout-2">
        <h3>Over 500+ Companies bond teams together with Oneburner</h3>
        <div className="company-logos">
          <img src={google} alt="logos"></img>
          <img src={outlook} alt="logos"></img>
          <img src={linkedin} alt="logos"></img>
          <img src={google} alt="logos"></img>
          <img src={oneburner} alt="logos"></img>
          <img src={outlook} alt="logos"></img>
        </div>
      </div>
      <div className="layout-3">
        <div className="tab">
          <div className="tab1">
            <p>CRM & Sales</p>
          </div>
          <div className="tab2">
            <p>Human Resources</p>
            <p>Marketing </p>
            <p>Remote Work</p>
            <p>Project Management</p>
            <p>Social Media</p>
          </div>
        </div>
        <div className="layout-1">
          <div className="collaborate">
            <div>
              Managing team activities <br />
              all in one place.
            </div>
            <p className="subtitle">
              Keep your team organized and informed with activities <br />
              that are up to date.
            </p>
          </div>
          <div className="team">
            <img src={meeting} alt="team" />
            <PlayCircleOutlineIcon className="play" size="large" />
          </div>
        </div>
      </div>
    </div>
    <div id="bg"></div>
      </>
  );
}

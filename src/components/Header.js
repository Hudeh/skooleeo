import React from "react";
import { Link } from "react-router-dom";
import oneburner from "./assets/images/oneburner.png";
export default function Header({ history }) {
  return (
    <header className="header">
      {/* right side liks */}
      <div className="right-links">
        <Link to="/" className="log-img">
          <img src={oneburner} alt="logo" height="80px" width="80px" />
          <span>
            <strong style={{ color: "#800080", fontSize: "20px" }}>Oneburner</strong>
          </span>
        </Link>
        {/* dropdown menu */}
        <div className="dropdown">
          <div className="dropbtn">
            <p>Poducts</p> 
            <span style={{margin:"8px 0 0 3px",fontSize:"25px"}}>&#8964;</span>
          </div>
          <div className="dropdown-content">
            <div className="dev">
              <div className="dev-inner">
                <span></span>
                <p>Clients</p>
                <p>see the amazing team that uses oneburner</p>
              </div>
              <div className="dev-inner">
              <span></span>
                <p>Clients</p>
                <p>see the amazing team that uses oneburner</p>
              </div>
              <div className="dev-inner">
              <span></span>
                <p>Clients</p>
                <p>see the amazing team that uses oneburner</p>
              </div>
              <div className="dev-inner">
              <span></span>
                <p>Clients</p>
                <p>see the amazing team that uses oneburner</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ color: "#333333", fontSize: "20px" }}>Pricing</div>
        <div style={{ color: "#333333", fontSize: "20px" }}>Enterprise</div>
        <div style={{ color: "#333333", fontSize: "20px" }}>Support</div>
      </div>
      {/* left side lnks */}
      <div className="left-links">
        <Link className="new-customer" to="/contact">
          Contact Sales
        </Link>
        <Link className="new-customer" to="/login">
          Login
        </Link>
        <div className="try" onClick={() => history.push("/")}>
          Try For Free<span style={{ marginLeft: "10px", fontSize: "20px" }}>&gt;</span>
        </div>
      </div>
    </header>
  );
}

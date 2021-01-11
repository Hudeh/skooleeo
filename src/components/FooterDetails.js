import React from "react";
import { Link } from "react-router-dom";
import oneburner from "./assets/images/oneburner.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function FooterDetails() {
  return (
    <div className="footer-details">
      <div className="logo-select">
        <Link className="logo">
          <img src={oneburner} alt="logo" />
          <span>
            <strong style={{ color: "#800080", fontSize: "40px" }}>Oneburner</strong>
          </span>
        </Link>
        <div className="select">
          <select>
            <option>English</option>
          </select>
        </div>
      </div>
      <div className="contact-menu-links">
        <div className="get-intouch">
          <p>No 1 CRM solution in Africa</p>
          <p>Terms of use | Privacy policy</p>
          <div>
            <p id="bold">Get in touch</p>
            <p>+234-(0)-800-000-0000</p>
            <div className="social-media">
              <FacebookIcon id="social" />
              <TwitterIcon id="social" />
              <LinkedInIcon id="social" />
              <YouTubeIcon id="social" />
            </div>
          </div>
        </div>
        <div className="menu-links">
          <div>
            <p id="bold">PRODUCTS</p>
            <div>
              <p>Features</p>
              <p>Link</p>
              <p>Link</p>
              <p>link</p>
            </div>
          </div>
          <div>
            <p id="bold">COMPANY</p>
            <div>
              <p>Features</p>
              <p>Link</p>
              <p>Link</p>
              <p>link</p>
            </div>
          </div>
          <div>
            <p id="bold">ONEBURNER FOR TEAMS</p>
            <div>
              <p>Features</p>
              <p>Link</p>
              <p>Link</p>
              <p>link</p>
            </div>
          </div>
          <div>
            <p id="bold"> RESOURCES</p>
            <div>
              <p>Features</p>
              <p>Link</p>
              <p>Link</p>
              <p>link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

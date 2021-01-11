import React from "react";
import naija from "./assets/images/9ja.png";

export default function contactUs() {
  return (
    <div className="contact-us">
      <div className="contact-form">
        <form className="form-group">
          <div className="form-group-1">
            <div>
              <label htmlFor="first">First Name</label>
              <input type="text" name="first_name" id="first" />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <input type="text" name="last_name" id="last" />
            </div>
          </div>
          <div className="form-group-2">
            <label htmlFor="email">Work Email</label>
            <input type="text" name="work_email" id="email" />
          </div>
          <div className="form-group-3">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone">
              <select>
                <option value="Nig">+234</option>
                <option value="Nig">+232</option>
                <option value="Nig">+236</option>
              </select>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="form-group-4">
            <label htmlFor="product">Products</label>
            <select type="text" name="products" id="product">
              <option>Product 1</option>
              <option>Product 2</option>
              <option>Product 3</option>
            </select>
          </div>
          <div className="form-group-5">
            <div>
              <label htmlFor="cp-name">Company Name</label>
              <input type="text" name="comapany_name" id="cp-name" />
            </div>
            <div>
              <label htmlFor="cp-size">Company Size</label>
              <select type="text" name="comapany_size" id="cp-size">
                <option>select from option</option>
              </select>
            </div>
          </div>
          <div className="form-group-6">
            <label htmlFor="note">How can our expert help you ?</label>
            <input type="textarea" name="note" id="note" />
          </div>
          <input type="submit" value="Log In" className="btn" />
        </form>
      </div>
      <div className="notice-board">
        <div>
          <h2>Request a call from an expert</h2>
          <div>
            Having thought of which product work best for you? fill the form and our expert will
            reach out to you.
          </div>
          <h2>Our offices around Africa</h2>
        </div>
        <div className="addresses">
          <div className="address-1">
            <p style={{fontWeight:"600"}}>Nigeria</p>
            <p>33, Adekunle Adetukunbo</p>
            <p>Vistoria Island, Lagos</p>
            <p>+234-(0)800000</p>
          </div>
          <div className="address-2">
            <p style={{fontWeight:"600"}}>Ghana</p>
            <p>33, Adekunle Adetukunbo</p>
            <p>Vistoria Island, Lagos</p>
            <p>+234-(0)800000</p>
          </div>
          <div className="address-3">
            <p style={{fontWeight:"600"}}>South Africa</p>
            <p>33, Adekunle Adetukunbo</p>
            <p>Vistoria Island, Lagos</p>
            <p>+234-(0)800000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

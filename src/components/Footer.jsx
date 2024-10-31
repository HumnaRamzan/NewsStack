import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col footer-head-style ">
            <div className="logo-style">Brief</div>
            <h3>Let's subscribe so you don't miss the latest updates</h3>
            <div className="input-container">
              <input
                type="email"
                className="input-style"
                placeholder="Your Email"
              />
              <button type="submit" className="button-style">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="row footer-bottom-style">
          <div className="col-2">
            <ul>
              <div className="footer-heading">Sport</div>
              <li>
                <a href="#">Football</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Tennis</a>
              </li>
              <li>
                <a href="#">Golf</a>
              </li>
              <li>
                <a href="#">Swim</a>
              </li>
              <li>
                <a href="#">Badminton</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <div className="footer-heading">Politics</div>
              <li>
                <a href="#">Government</a>
              </li>
              <li>
                <a href="#">President</a>
              </li>
              <li>
                <a href="#">DPR</a>
              </li>
              <li>
                <a href="#">Patrai</a>
              </li>
              <li>
                <a href="#">Democrat</a>
              </li>
              <li>
                <a href="#">NewCase</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <div className="footer-heading">Health</div>
              <li>
                <a href="#">Covid-19</a>
              </li>
              <li>
                <a href="#">Cough</a>
              </li>
              <li>
                <a href="#">Dizzy</a>
              </li>
              <li>
                <a href="#">Sprain</a>
              </li>
              <li>
                <a href="#">Typhus</a>
              </li>
              <li>
                <a href="#">Pink eye</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <div className="footer-heading">Environment</div>
              <li>
                <a href="#">River</a>
              </li>
              <li>
                <a href="#">Sea</a>
              </li>
              <li>
                <a href="#">Mainland</a>
              </li>
              <li>
                <a href="#">Mountains</a>
              </li>
              <li>
                <a href="#">Ricefield</a>
              </li>
              <li>
                <a href="#">Beach</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <div className="footer-heading">Business</div>
              <li>
                <a href="#">Start Up</a>
              </li>
              <li>
                <a href="#">Agency</a>
              </li>
              <li>
                <a href="#">Market</a>
              </li>
              <li>
                <a href="#">Ecommerce</a>
              </li>
              <li>
                <a href="#">Creative</a>
              </li>
              <li>
                <a href="#">Digital world</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <div className="footer-heading">Education</div>
              <li>
                <a href="#">UI/UX</a>
              </li>
              <li>
                <a href="#">Test</a>
              </li>
              <li>
                <a href="#">SNBP</a>
              </li>
              <li>
                <a href="#">University</a>
              </li>
              <li>
                <a href="#">School</a>
              </li>
              <li>
                <a href="#">Web Dev</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

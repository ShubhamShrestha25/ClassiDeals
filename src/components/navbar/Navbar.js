import React from "react";
import { DownOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navUp">
        <div className="navLeft">
          <Link to="/" className="link">
          <img src="/images/logo.jpg" alt="Not Found" />
          </Link>
        </div>
        <div className="navRight">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="navDown">
        <div className="navItems">
          <h5>Holiday & Travel</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">In Australia</li>
              <li className="dropDownMenuLi">World Tour</li>
              <li className="dropDownMenuLi">Holiday & Travel</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Things To Do</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Things To Do</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Health & Fitness</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Health & Fitness</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Restaurant & Food</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Mix Pizza</li>
              <li className="dropDownMenuLi">Mo Mo</li>
              <li className="dropDownMenuLi">Restaurant & Food</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Shopping</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Shopping</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Service</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">IT Computer</li>
              <li className="dropDownMenuLi">Health</li>
              <li className="dropDownMenuLi">Services</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>Medical Supply</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Medical Supply</li>
            </ul>
          </div>
        </div>
        <div className="navItems">
          <h5>
            Categories <DownOutlined className="downIcon" />
          </h5>
          <div className="dropDownMenu">
            <div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Holiday & Travel</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li  className="dropDownMenuLi">In Australia</li>
                    <li  className="dropDownMenuLi">World Tour</li>
                    <li  className="dropDownMenuLi">Holiday & Travel</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Things To Do</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Things To Do</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Health & Fitness</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Health & Fitness</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Restaurant & Food</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Restaurant & Food</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Shopping</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Shopping</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Service</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Service</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Medical Supply</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Medical Supply</li>
                  </ul>
                </div>
              </div>
              <div className="navItem">
                <h5 className="dropDownMenuLi">Beauty</h5>
                <div className="dropDownSubMenu">
                  <ul>
                    <li className="dropDownMenuLi">Beauty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navItems">
          <h5>Beauty</h5>
          <div className="dropDownMenu">
            <ul>
              <li className="dropDownMenuLi">Beauty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

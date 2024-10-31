import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="p-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 logo-style "
            >
              Brief
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-secondary first-menu-item"
                >
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 ">
                  Creators
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 ">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 ">
                  Subscribe
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn  me-2">
                <FaRegEdit className="nav-icon" />
                <span className="write-text">Write</span>
              </button>
              <button type="button" className="btn  me-2">
                <MdBookmark className="nav-icon" />
              </button>

              <button type="button" className="btn  me-2">
                <FaBell className="nav-icon" />
              </button>
              <button type="button" className="btn  me-2">
                <FaUserTie className="nav-icon user-icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

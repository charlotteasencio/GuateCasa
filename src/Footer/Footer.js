import React from "react";
import "./Footer.scss";

import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__icons">
          <IconContext.Provider
            value={{ className: "footer__individualIcons" }}
          >
            <div>
              <FaFacebookF />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "footer__individualIcons" }}
          >
            <div>
              <FaTwitter />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "footer__individualIcons" }}
          >
            <div>
              <FaInstagram />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://linkedin.com/in/parush-uppal" target="blank"><LinkedInIcon /></a>
          
          <a href="https://github.com/parush-uppal" target="_blank"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 parush-uppal.netlify.app</p>
    </div>
  );
}

export default Footer;
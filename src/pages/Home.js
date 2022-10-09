import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
       <img src="Text2 (1).jpeg" class="img1" alt=''></img> 
        <h2> Hi, My Name is Parush Uppal</h2>
        <div className="prompt">
          <p>A Frontend Web  developer with a passion for learning and inovating </p>
          <a href="https://linkedin.com/in/parush-uppal" target="blank"><LinkedInIcon /></a>
          
          <a href="https://github.com/parush-uppal" target="_blank"><GithubIcon /></a>
         
         
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, 
               BootStrap,Tailwind Css
            </span>
          </li>
          
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C++</span>
          </li>
          <li className="item">
            <h2>Database</h2>
            <span>MySQL,Mongo DB</span>
          </li>
        </ol>
       
      </div>
    </div>
  );
}

export default Home;
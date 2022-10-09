import React from "react";
import CertificateItem from "../components/CertificateItem";
import { CertificateList } from "../helpers/ CertificatetList";

import "../styles/Projects.css";

function Certificate() {
  return (  
    <div className="projects">
      <h1> My Certificates</h1>
      <div className="projectList">
        {CertificateList.map((project, idx) => {
          return (
            <CertificateItem id={idx} name={project.name} image={project.image } />
          );
        })}
      </div>
    </div>
  );
}

export default Certificate;
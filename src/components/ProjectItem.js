import React from "react";

import Button from '@mui/material/Button';


function ProjectItem({ image, name, id,url }) {

  return (
    <div
      className="projectItem"
     
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
     
       <Button variant="contained" size="small" href={url} target="_blank">Browse Website</Button>
      
    </div>
  );
}

export default ProjectItem;
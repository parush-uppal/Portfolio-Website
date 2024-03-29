import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hansraj Public School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Class 9th-10th
          </h4>
          <p> Secondary School-83%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Guru Gobind Singh Senior Secondary School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Class 11th-12th
          </h4>

          <p> Senior Secondary School-85%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chitkara University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science And Engineering
          </h4>
          <p>CGPA-9.88/10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
           icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Camp Yellow
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Devlopment Intern
          </h4>
          <p>Designed the frontend part from scratch using react for their International Mathematics Championship</p> 
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023-May 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
           icon={<WorkIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Aimerse Technology Private Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Web Devlopment Intern
          </h4>
          <p>Worked as a Frontend Intern Devlopling frontend for their clients using React Js</p> 
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Education;
import React from "react";
import "./SideNav.scss";
import { useProject } from "../../context/ProjectContext";
const SideNav = () => {
  const { project } = useProject();

  return (
    <div className="sidenav">
      <p>ALL BOARDS (2)</p>
      <ul>
        {project?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;

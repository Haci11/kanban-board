import React from "react";
import "./SideNav.scss";
import { useProject } from "../../context/ProjectContext";
const SideNav = () => {
  const { projects, currentProject, changeBoard } = useProject();

  return (
    <div className="sidenav">
      <p>ALL BOARDS (2)</p>
      <ul>
        {projects?.map((project, index) => (
          <li
            onClick={() => {
              changeBoard(index);
            }}
            key={project.id}
            className={currentProject.id === project.id && "active"}>
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;

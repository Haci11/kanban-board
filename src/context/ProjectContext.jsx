import React, { useState, useContext, createContext } from "react";
import { projectsData } from "./project-data";
const ProjectContext = createContext({});

export function useProject() {
  return useContext(ProjectContext);
}
const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(projectsData);

  const value = {
    project: project,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
export default ProjectProvider;

import React, {useState} from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';


export const Projects = ({ activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
          <li
            key={project.projectid}
            data-testid="project-action-parent"
            data-doc-id={project.docid}
            className={
              active === project.projectid
                ? 'active sidebar__project'
                : 'sidebar__project'
            }
          >
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActive(project.projectid);
                  setSelectedProject(project.projectid);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                  }
                }}
                >
                <IndividualProject project={project} />
              </div>
          </li>
        ))
      );
};
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
                data-doc-id={project.docid}
                data-testid="project-action"
                type="button"
                className={
                    active === project.projectid
                    ? 'active sidebar__project'
                    : 'sidebar_project'
                }
                onKeyDown={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
                onClick={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
            >
                <IndividualProject project={project} />
            </li>

        ))
    );
};
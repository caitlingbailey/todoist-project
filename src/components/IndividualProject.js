import React, {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue} from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({project}) => {
    const [ showConfirm, setShowConfirm ] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const deleteProject = docid => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docid)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
            })
    };

    // return (
    //     <>
    //     <span className="sidebar__dot">•</span>
    //     <span className="sidebar__project-name">{project.name}</span>
    //     <span className="sidebar__project-delete" 
    //     data-testid="delete-project" 
    //     onClick={() => setShowConfirm(!showConfirm)} >
    //         < FaTrashAlt />
    //         {showConfirm && (
    //             <div className="project-delete-modal">
    //                 <div className="project-delete-modal__inner">
    //                     <p>Are you sure you want to delete this project?</p>
    //                     <button
    //                         type="button"
    //                         onClick={() => deleteProject(project.docid)}
    //                         >
    //                         Delete
    //                         <span onClick={() => setShowConfirm(!showConfirm)}>Cancel
    //                         </span>
    //                     </button>
    //                 </div>
    //             </div>
    //         )}
    //     </span>
    //     </>
    // )
    return (
        <>
          <span className="sidebar__dot">•</span>
          <span className="sidebar__project-name">{project.name}</span>
          <span
            className="sidebar__project-delete"
            data-testid="delete-project"
            onClick={() => setShowConfirm(!showConfirm)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShowConfirm(!showConfirm);
            }}
            tabIndex={0}
            role="button"
            aria-label="Confirm deletion of project"
          >
            <FaTrashAlt />
            {showConfirm && (
              <div className="project-delete-modal">
                <div className="project-delete-modal__inner">
                  <p>Are you sure you want to delete this project?</p>
                  <button
                    type="button"
                    onClick={() => deleteProject(project.docid)}
                  >
                    Delete
                  </button>
                  <span
                    onClick={() => setShowConfirm(!showConfirm)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setShowConfirm(!showConfirm);
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label="Cancel adding project, do not delete"
                  >
                    Cancel
                  </span>
                </div>
              </div>
            )}
          </span>
        </>
      );
};

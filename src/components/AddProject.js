import React, {useState} from 'react';
import { firebase } from '../firebase'; 
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context'; 

export const AddProject = ({shouldShow = false}) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectid = generatePushId();
    const { projects, setProjects } = useProjectsValue();

    const addProject = () =>
        projectName && firebase
            .firestore()
            .collection('projects')
            .add({
                projectid, 
                name: projectName,
                userid: '68bd4b0f'
            })
            .then(() => {
                setProjects([...projects]);
                setProjectName('');
                setShow(false);
            });

            return (
                <div className='add-project' data-testid='add-project'>
                    {show && (
                        <div className="add-project__input">
                            <input 
                                value={projectName}
                                onChange={e => setProjectName(e.target.value)}
                                className="add-project__name"
                                data-testid="project-name"
                                type="text"
                                placeholder="name your project"
                                />
                                <button 
                                    className="add-project__submit"
                                    type="button"
                                    onClick={() => addProject()}
                                    data-testid='add-projecy-submit'
                                >
                                    Add Project
                                </button>
                                <span
                                    data-testid="hide-project-overlay"
                                    className="add-project__cancel"
                                    onClick={() => setShow(false)}

                                >
                                    Cancel
                                </span>
                        </div> 
                    )}
                    <span className="add-project__plus">+</span>
                    <span
                        data-testid="add-project-action"
                        className="add-project-text"
                        onClick={() => setShow(!show)}
                    >
                         Add Project
                    </span>
                </div>
            )

}
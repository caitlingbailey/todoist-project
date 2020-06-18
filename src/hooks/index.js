import { useState, useEffect } from 'react';
import moment from 'moment';
import {firebase } from '.../firebase';
import { collatedTasksExist } from '../helpers';


// const collatedTasks = () => {};

export const useTasks = selectedProject => {
    const[tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore
        .collection('tasks')
        .where('userId', '==', '68bd4b0f');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) 
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY')))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;
    }, []);
}
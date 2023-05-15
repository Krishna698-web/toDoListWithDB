import React from 'react'
import TaskItem from './TaskItem'

const DisplayTasks = ({ tasks, error, loading, onFetch }) => {
    let taskList = <h2>Not task available...</h2>

    if(tasks.length > 0){
        taskList = tasks.map(task => (<TaskItem key={task.id} taskText={task.text}/>))
    }
    
    let content = taskList;

    if(error){
        content = <button onClick={onFetch}>Try again</button>
    }

    if(loading){
        content = "loading tasks...";
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default DisplayTasks
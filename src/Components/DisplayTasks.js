import React from 'react'

const DisplayTasks = ({ tasks }) => {
    return (
        <div>
            {!tasks ? <div>No tasks found</div> : tasks.map(task => (
                <p key={task.id}>{task.text}</p>
            ))}
        </div>
    )
}

export default DisplayTasks
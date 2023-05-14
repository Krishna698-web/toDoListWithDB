import React from 'react'

const DisplayTasks = ({ tasks }) => {
    return (
        <div>
            {tasks && tasks.map(task => (
                <p key={task.id}>{task.text}</p>
            ))}
        </div>
    )
}

export default DisplayTasks
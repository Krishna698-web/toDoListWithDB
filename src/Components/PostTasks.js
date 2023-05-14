import React, { useRef, useState } from 'react'

const PostTasks = () => {
    const taskInputRef = useRef();
    const submitTaskHandler = async (e) => {
        e.preventDefault();

        const response = await fetch('https://taskcreationwithfirebase-default-rtdb.firebaseio.com/tasks.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: taskInputRef.current.value })
        })

        const data = await response.json();
        console.log(data);
    }


    return (
        <form onSubmit={submitTaskHandler}>
            <input type='text' ref={taskInputRef} placeholder='Enter a task' />
            <button>Submit</button>
        </form>
    )
}

export default PostTasks
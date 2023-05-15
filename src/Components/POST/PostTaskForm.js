import React, { useRef } from 'react'
import classes from './PostTasks.module.css'

const PostTaskForm = ({ onEnter, isLoading }) => {
    const taskInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        onEnter(taskInputRef.current.value);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <input
                className={classes.input}
                type="text"
                ref={taskInputRef}
                placeholder="Enter a task"
            />
            <button className={classes.submitBtn} type="submit">
                {isLoading ? "Sending..." : "Submit"}
            </button>
        </form>
    )
}

export default PostTaskForm
import React, { useRef, useState } from "react";
import classes from "./PostTasks.module.css";
import useHttp from "./hooks/use-http";

const PostTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const taskInputRef = useRef();

    const postHttpRequest = useHttp();

    const submitTaskHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const data = postHttpRequest({
                url: "https://tasks-app-b0442-default-rtdb.firebaseio.com/tasks.json",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: taskInputRef.current.value })
            });
            console.log(data);
            console.log("added");
            taskInputRef.current.value = "";
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            throw new Error("something went wrong", error.message);
        }
    };

    return (
        <form onSubmit={submitTaskHandler} className={classes.form}>
            <input
                className={classes.input}
                type="text"
                ref={taskInputRef}
                placeholder="Enter a task"
            />
            <button className={classes.submitBtn} type="submit">
                {isLoading ? "Loading..." : "Submit"}
            </button>

        </form>
    );
};

export default PostTasks;

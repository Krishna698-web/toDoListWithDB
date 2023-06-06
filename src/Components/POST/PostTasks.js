import React, { useRef, useState } from "react";
import useHttp from "../hooks/use-http";
import PostTaskForm from "./PostTaskForm";

const PostTasks = ({ onAddTask }) => {
  // const [error, setError] = useState(null);

  const { isLoading, error, sendRequest } = useHttp();
  // console.log(error)

  const addingTask = (taskText, data) => {
    // const generatedId = data.name;

    const createdTask = {
      id: Math.round(Math.random() * 10),
      text: taskText,
    };

    onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    try {
      const data = sendRequest(
        {
          url: "https://tasks-app-b0442-default-rtdb.firebaseio.com/tasks.json",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { text: taskText },
        },
        addingTask.bind(null, taskText)
        //null: refers to this, and taskText is the taskText from enterTaskHandler
        //The function by default takes the data parameter
      );

      // const data = await fetch("https://tasks-app-b0442-default-rtdb.firebaseio.com/tasks.json",
      //     {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify({ text: taskText })
      //     });
    } catch (error) {
      throw new Error("something went wrong", error.message);
    }
  };

  return (
    <>
      <PostTaskForm onEnter={enterTaskHandler} isLoading={isLoading} />
    </>
  );
};

export default PostTasks;

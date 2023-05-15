import React, { useCallback, useEffect, useState } from "react";
import PostTasks from "./Components/POST/PostTasks";
import DisplayTasks from "./Components/GET/DisplayTasks";
import useHttp from "./Components/hooks/use-http";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (data) => {
    const loadedTasks = [];

    for (const key in data) {
      loadedTasks.push({ id: key, text: data[key].text });
    }

    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchData,
  } = useHttp();

  // const fetchData = async (taskText) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://tasks-app-b0442-default-rtdb.firebaseio.com/tasks.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const data = await response.json();

  //   } catch (error) {
  //     setError(error.message);
  //     throw new Error(error.message);
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchData(    { url: "https://tasks-app-b0442-default-rtdb.firebaseio.com/tasks.json" },
    transformTasks);
  }, []);

  const enteredTaskHandler = (task) => {
    setTasks((prevTask) => prevTask.concat(task));
  };

  return (
    <div>
      <PostTasks onAddTask={enteredTaskHandler} />
      <DisplayTasks
        tasks={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchData}
      />
    </div>
  );
};

export default App;

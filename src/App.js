import React, { useCallback, useEffect, useState } from 'react'
import PostTasks from './Components/PostTasks'
import DisplayTasks from './Components/DisplayTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://tasks-app-b0442-default-rtdb.firebaseio.com/tasks.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const key in data) {
        loadedTasks.push({ id: key, text: data[key].text });
      }

      console.log(data);
      setTasks(loadedTasks);
      console.log(loadedTasks);
    } catch (error) {
      setError(error.message);
      throw new Error(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <PostTasks />
      <DisplayTasks tasks={tasks} />
      <button onClick={fetchData}>Click to fetch</button>
    </div>
  )
}

export default App
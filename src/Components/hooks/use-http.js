import { useState } from "react";

const useHttp = async (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    const [taskData, setTaskData] = useState([]);
    try {
        const response = await fetch(props.url, {
            method: props.method,
            headers: props.headers,
            body: props.body
        });

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();
        setTaskData(data);
    } catch (error) {
        setError(error.message);
        throw new Error(`Error occured: ${error.message}`);
    }

    return taskData;
}

export default useHttp;
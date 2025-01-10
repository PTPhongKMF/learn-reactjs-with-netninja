import { useState, useEffect } from "react";

function useFetch(url) {
    const [objects, setObjects] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchObjects = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 3000));

                const res = await fetch(url);
                if (!res.ok) { throw new Error("Failed!") };

                const data = await res.json();
                setObjects(data);
                setError("");
                setisLoading(false); 
            } catch (err) {
                setError(err.message);
                setisLoading(false);
            }
        };
        fetchObjects();
    }, [])

    return { objects, isLoading, error};
}

export default useFetch;
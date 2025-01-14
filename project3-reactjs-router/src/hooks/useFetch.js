import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const res = await fetch(url, { signal: abortController.signal });
                if (!res.ok) { throw new Error("Failed!") };

                const data = await res.json();
                setData(data);
                setError("");
                setisLoading(false);
            } catch (err) {
                if(err.name === "AbortError") {
                    console.log("Fetch aborted!")
                } else {
                    setError(err.message);
                    setisLoading(false);
                }
            }
        };
        fetchData();

        return () => {
            abortController.abort();
        }
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;
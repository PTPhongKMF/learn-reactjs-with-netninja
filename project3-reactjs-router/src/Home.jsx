import { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import ObjectList from "./components/ObjectList";
import useFetch from "./hooks/useFetch";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "blog 1", author: "me", content: "hello hello hellohellohellohellohellohellohello" },
        { id: 2, title: "blog 2", author: "me", content: "bye bye bye byebyebyebyebyebyebyebyebyebyebyebye" },
        { id: 3, title: "blog 3", author: "me", content: "damn damn damn damn damndamndamndamndamndamndamndamn" }
    ]);

    const [count, setCount] = useState(0);
    const [objects, setObjects] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState("");

    const { objects: data1, isLoading: data2, error: data3} = useFetch("https://api.restful-api.dev/objects");

    useEffect(() => {
        console.log("This useEffect run everytime!");
    })
    useEffect(() => {
        console.log("This useEffect run once!");
    }, [])
    useEffect(() => {
        console.log("This useEffect run when count increase!, current count: " + count);
    }, [count])

    useEffect(() => {
        const fetchObjects = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const res = await fetch("https://api.restful-api.dev/objects");
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

    const handleDelete = (id) => {
        const newBlogList = blogs.filter((blog) => { return blog.id !== id });
        setBlogs(newBlogList);
    }

    const handleClick = (e) => {
        console.log(e);
    }

    return ( 
        <div className="home">
            <h1>This is our Homepage</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => { setCount(count+1) }}>Click count: { count }</button>
            
            <BlogList blogs={ blogs } handleDelete={handleDelete}/>

            <h2>ObjectList</h2>
            { isLoading ? <div>Loading...</div> : 
                (error ? <div>{ error }</div> : <ObjectList objects={ objects }/>) }
            
            <h2>ObjectList 2 with custom hook</h2>
            { data2 ? <div>Loading...</div> : 
                (data3 ? <div>{ data3 }</div> : <ObjectList objects={ data1 }/>) }
        </div>
     );
}
 
export default Home;
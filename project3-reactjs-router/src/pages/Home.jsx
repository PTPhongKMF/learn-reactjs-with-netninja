import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            <h1>This is our Homepage</h1>
            
            <h3>Blog list</h3>
            { isLoading ? <div>Loading...</div> : 
            (error ? <div>{ error }</div> : <BlogList blogs={ blogs }/>) }
        </div>
     );
}
 
export default Home;
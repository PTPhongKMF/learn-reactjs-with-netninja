import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${ id }`);

    return ( 
        <div className="blog-details">
            <h2>Blog details - { id }</h2>
            { 
            isLoading ? <div>Loading...</div> : 
            (error ? <div>{ error }</div> : 
            <article>
                <h3>{ blog.title }</h3>
                <p>Written by { blog.author }</p>
                <p>views: { blog.viewcount }</p>
                <p>{ blog.content }</p>
            </article>) 
            }
        </div>
     );
}
 
export default BlogDetails;
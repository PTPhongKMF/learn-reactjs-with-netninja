import { Link } from "react-router-dom";

const BlogList = (props) => {

    return ( 
        <div className="blog-list">
                { props.blogs.map((blog) =>  (
                    <div className="blog-preview" key={ blog.id }>
                        <Link to={ `/blogs/${ blog.id }` }>
                            <h3>{ blog.title }</h3>
                        </Link>
                        <p>Written by { blog.author }</p>
                        <p>views: { blog.viewcount }</p>
                    </div>
                )) }
        </div>
     );
}
 
export default BlogList;
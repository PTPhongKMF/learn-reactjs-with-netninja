const BlogList = (props) => {

    return ( 
        <div className="blog-list">
                { props.blogs.map((blog) =>  (
                    <div className="blog-preview" key={blog.id}>
                        <h3>{ blog.title }</h3>
                        <p>Written by { blog.author }</p>
                        <button onClick={() => props.handleDelete(blog.id)}>Delete</button>
                    </div>
                )) }
        </div>
     );
}
 
export default BlogList;
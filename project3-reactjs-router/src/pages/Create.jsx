import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [viewcount, setViewcount] = useState("1");

    const [isLoading, setisLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = { title, content, author, viewcount };

        setisLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const res = await fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            });

            if (!res.ok) throw new Error("Failed to add blog");

            console.log("blog added");
            navigate(-1);
        } catch (err) {
            console.log(err.message);
        } finally {
            setisLoading(false);
        }
    }

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Content:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required/>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <label>Viewcount:</label>
                <select value={viewcount} onChange={(e) => setViewcount(e.target.value)}>
                    <option value="1">1</option>
                    <option value="100">100</option>
                    <option value="690">690</option>
                    <option value="1000">1000</option>
                    <option value="9861">9861</option>
                    <option value="21423523">21423523</option>
                </select>
                { isLoading ? <button disabled>creating...</button> : <button>Create blog</button> }
            </form>
        </div>
     );
}
 
export default Create;
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h3>Project 3</h3>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/create">New post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
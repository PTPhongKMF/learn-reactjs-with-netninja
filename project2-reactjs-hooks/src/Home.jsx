import { useState } from "react";

const Home = () => {
    // let clickStatus = 'You havent click yet.'
    const [clickStatus, setClickStatus] = useState("You havent click yet.");

    const handleClick = (e) => {
        console.log(e);
        setClickStatus("You clicked!!");
    }

    return ( 
        <div className="home">
            <h1>This is our Homepage</h1>
            <button onClick={handleClick}>Click me</button>
            <p>{ clickStatus }</p>
        </div>
     );
}
 
export default Home;
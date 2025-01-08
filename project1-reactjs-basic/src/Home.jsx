const Home = () => {
    const handleClick = () => {
        console.log("hello!");
    }

    const handleClickAgain = (name, e) => {
        console.log("hello again " + name + "!", e.target);
    }

    return ( 
        <div className="home">
            <h1>This is our Homepage</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {handleClickAgain("mister", e)}}>Click again!</button>
        </div>
     );
}
 
export default Home;
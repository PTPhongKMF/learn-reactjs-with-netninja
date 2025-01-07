import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "This is the title";
  const gglink = "http://www.google.com";

  return (
    <>
      <Navbar/>
      <Home/>

      <div className="content">
        <h3>App Component</h3>
        <h4>{ title }</h4>
        <h4>{ "another title" }</h4>
        <p>{ ["This","is","an","array",":",1,2,3,4,5,6,7,8,9] }</p>
        <p>{ Math.random() }</p>

        <a href={ gglink }>Google Link</a>
      </div>

    </>
  )
}

export default App

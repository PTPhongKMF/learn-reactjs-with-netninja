import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound404 from "./pages/NotFound404";

function App() {

  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/create" element={ <Create/> }/>
        <Route path="/blogs/:id" element={ <BlogDetails/> }/>
        <Route path="*" element={ <NotFound404/> }/>
      </Routes>
     
    </Router>
  )
}

export default App

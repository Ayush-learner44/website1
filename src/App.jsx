import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Footer from "./Components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
  <>
    <Navbar/>  
    {/* <ul>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/">Home</NavLink></li>
    </ul> */}
    <Switch>
      <Route exact path="/" component={Home}/>     
      <Route exact path="/about" component={About}/>     
      <Route exact path="/contact" component={Contact}/>     
      <Route exact path="/services" component={Services}/>     
      <Redirect to="/"/>     
    </Switch>
    
    <Footer/>
  </>
  );
}

export default App;

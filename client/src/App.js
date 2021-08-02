//import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import "./Navbar.css"
import {Route} from "react-router-dom"
import Background from  "./Background"
import MainNav from "./MainNav"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainNav/>
       <Background/>
      <Route exact path = "/">
        {/* <Home/> */}
      </Route>
      <Route path="/Signup">

      </Route>
      <Route path="/Signin">

      </Route>
      <h1>Trending Now</h1>
<div className = "together">
            <div className = "first">
            <div className = "move">
            <h3>
Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h3>
            </div>
            
            </div>
            <div className = "second">
           <h3>Happy Spider-Man day</h3>
          </div>
          <div className = "third">
            <h3>Activision hit with another lawsuit as female employees are in a frenzy.</h3>
          </div>
          <div className = "fourth">
            <h3>EA play show Dead Space. Could this be EA's big comeback</h3>
          </div>
          </div>
    </div>
  );
}

export default App;

//
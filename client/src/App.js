
//import logo from './logo.svg';

import Navbar from "./Navbar"
import "./Navbar.css"
import {Route} from "react-router-dom"
import Background from  "./Background"
import MainNav from "./MainNav"

import './App.css';
import Home from './screens/home/Home';
import CreatePost from './screens/create/Create';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp';
import Edit from './screens/edit/Edit';




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

      {/* <Route to="/">
        <Home />
      </Route>
      <Route to="/create-post">
        <CreatePost />
      </Route>
      <Route to="/sign-up">
        <SignUp />
      </Route>
      <Route to="/sign-in">
        <SignIn />
      </Route>
      <Route to="/edit-post">
        <Edit />
      </Route> */}


    </div>
  );
}

export default App;

//
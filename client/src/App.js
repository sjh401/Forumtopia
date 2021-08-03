import Navbar from "./components/nav/NavBar"
import "./components/nav/NavBar.css"
import {Route} from "react-router-dom"
import Background from  "./components/background/Background"


import './App.css';
import Home from './screens/home/Home';
import CreatePost from './screens/create/Create';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp';
import Edit from './screens/edit/Edit';
import MainNavBar from "./components/nav/MainNavBar"



function App() {
  return (
    <div className="App">

      <Navbar/>
      <MainNavBar/>
      <Background/>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      {/* <Route path="/edit-post">
        <Edit />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route> */}
    </div>
  );
}

export default App;


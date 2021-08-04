import {Route} from "react-router-dom"
import {useState} from "react"
import './App.css';
import Home from './screens/home/Home';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp';
import Footer from './components/Footer/Footer';




function App() {

  const [ user, setUser ] = useState(null);

  return (
    <div className="App">
      <Route exact path = "/">
        <Home/>
      </Route>
      { !user && 
        <div>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
        </Route>
        <Footer />
        </div>
      }
    </div>
  );
}

export default App;
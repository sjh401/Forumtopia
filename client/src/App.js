import {useState, useEffect} from "react"
import Home from "./screens/home/Home";
import SignIn from "./screens/sign-in/SignIn";
import {verify} from "./services/user"
import { Route } from "react-router-dom"


function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const verifyUser = async() => {
      setUser(await verify())
    }
    verifyUser()
  }, [])
  
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sign-in">
        <SignIn setUser={setUser}/>
      </Route>
      <Route path="/sign-up">
        <SignIn setUser={setUser}/>
      </Route>
    </div>
  )
}

export default App;


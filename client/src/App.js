import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import Home from "./screens/home/Home";
import SignIn from "./screens/sign-in/SignIn";
import SignUp from "./screens/sign-up/SignUp"
import EditThread from "./screens/edit-thread/EditThread";
import CreateThread from "./screens/Create /createthread";
import Footer from "./components/Footer/Footer";


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
        <Home user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-in">
        <SignIn user={user} setUser={setUser} />
      <Route path="/threads-create">
        <CreateThread user={user} setUser={setUser} />
      </Route>
      </Route>
      <Route path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route path="/threads-edit">
        <EditThread user={user} setUser={setUser} />
      </Route>
      <Footer />
    </div>
  )
}

export default App;


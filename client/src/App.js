import {useState, useEffect} from "react"
import Home from "./screens/home/Home";
import SignIn from "./screens/sign-in/SignIn";
import {verify} from "./services/user"
import { Route } from "react-router-dom"
import CreatePost from "./screens/Create /createpost";
import EditPost from "./screens/edit-thread/EditPost";
import EditThread from "./screens/edit-thread/EditThread";


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
      <Route path="create-post">
        <CreatePost user={user} setUser={setUser} />
      </Route>
      </Route>
      <Route path="/sign-up">
        <SignIn user={user} setUser={setUser} />
      </Route>
      <Route path="/threads/:id">
        <EditThread user={user} setUser={setUser} />
      </Route>
    </div>
  )
}

export default App;


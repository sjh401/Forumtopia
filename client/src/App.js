import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import Home from "./screens/Home/Home";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp"
import EditThread from "./screens/Thread/EditThread";
import CreateThread from "./screens/Thread/CreateThread";
import Thread from "./screens/Thread/Thread";
import CategoryThread from "./components/TestingStuff/CategoryThread";


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
      </Route>
      <Route path="/threads-create">
        <CreateThread user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route path="/thread-edit/:id">
        <EditThread user={user} setUser={setUser} />
      </Route>
      <Route path="/thread/:id/posts">
        <Thread user={user} setUser={setUser}/>
      </Route>
      <Route path="/tests">
        <CategoryThread user={user} setUser={setUser}/>
      </Route>
    </div>
  )
}

export default App;


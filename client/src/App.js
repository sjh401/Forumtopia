import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import Home from "./screens/home/Home";
import SignIn from "./screens/sign-in/SignIn";
import SignUp from "./screens/sign-up/SignUp";
import SignOut from './screens/signout/SignOut';
import EditThread from "./screens/Threads/EditThread";
import Thread from "./screens/edit-thread/Thread";
import Gaming from "./screens/Threadcss/Gaming";
import Comics from "./screens/Threadcss/Comics";
import CreateThread from "./screens/Threads/createthread";



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
      <Route path = "/threads">
        <Gaming/>
        </Route>
        <Route path ="/threadscomic">
          <Comics/>
        </Route>
      <Route path="signout">
        <SignOut setUser={setUser} />
      </Route>
      <Route path="/thread-edit/:id">
        <EditThread user={user} setUser={setUser} />
      </Route>
      <Route path="/thread/:id">
        <Thread user={user} setUser={setUser}/>
      </Route>
      
    </div>
  )
}

export default App;


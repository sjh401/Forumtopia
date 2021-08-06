import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import SignIn from "./screens/sign-in/SignIn";
import SignUp from "./screens/sign-up/SignUp";
import SignOut from './screens/signout/SignOut';
import EditThread from "./screens/Threads/EditThread";
import ThreadCard from "./screens/Threads/ThreadCard";
import Gaming from "./screens/Threadcss/Gaming";
import Comics from "./screens/Threadcss/Comics";
import CreateThread from "./screens/Threads/createThread";
import Home from "./screens/home/Home";
import Categories from "./screens/Categories/Categories";
import EditPost from "./screens/Posts/EditPost";



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
      <Route path = "/threads-gaming">
        <Gaming user={user} setUser={setUser}/>
      </Route>
      <Route path ="/threads-comic">
        <Comics user={user} setUser={setUser}/>
      </Route>
      <Route path="/signoout">
        <SignOut setUser={setUser} />
      </Route>
      <Route path="/threads-edit/:id">
        <EditThread user={user} setUser={setUser} />
      </Route>
      <Route path="/post-edit/:id">
        <EditPost user={user} setUser={setUser} />
      </Route>
      <Route path="/threads/:id">
        <ThreadCard user={user} setUser={setUser}/>
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      
    </div>
  )
}

export default App;


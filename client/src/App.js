import {useState, useEffect} from "react"
import { verify} from "./services/user"
import { Route } from "react-router-dom"

import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from './screens/SignOut/SignOut';
import Home from "./screens/Home/Home";

//GET REQUESTS
import GetTopics from "./TestingFolder/GetTopics";
import GetThreads from "./TestingFolder/GetThreads";
import GetPosts from "./TestingFolder/GetPosts";

//PUT REQUESTS
import UpdatePost from "./TestingFolder/UpdatePost";
import UpdateThread from "./TestingFolder/UpdateThread";


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

      <Route exact path="/sign-in">
        <SignIn user={user} setUser={setUser} />
      </Route>

      <Route exact path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
  
      <Route exact path="/sign-out">
        <SignOut setUser={setUser} />
      </Route>

      <Route exact path="/topics">
        <GetTopics user={user} setUser={setUser}/>
      </Route>

      <Route exact path="/topics/:id/threads">
        <GetThreads user={user} setUser={setUser}/>
      </Route>

      <Route exact path="/threads/:pid/posts">
        <GetPosts user={user} setUser={setUser}/>
      </Route>

      <Route exact path="/posts/:pid">
        <UpdatePost user={user} setUser={setUser} />
      </Route>

      <Route exact path="/threads/:id">
        <UpdateThread user={user} setUser={setUser} />
      </Route>

      
    </div>
  )
}

export default App;


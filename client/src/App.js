import './App.css';
import { Route } from 'react-router-dom';
import Home from './screens/home/Home';
import CreatePost from './screens/create/Create';
import SignIn from './screens/sign-in/SignIn';
import SignUp from './screens/sign-up/SignUp';
import Edit from './screens/edit/Edit';




function App() {
  return (
    <div className="App">
      <Route to="/">
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
      </Route>

    </div>
  );
}

export default App;

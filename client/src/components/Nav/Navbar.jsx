import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const authenticatedOptions = (
  <div className="signed-in-nav">
    <NavLink activeStyle={{ color: "rgb(255, 157, 0)" }} to="/sign-out">Sign Out</NavLink>
    <NavLink activeStyle={{ color: "rgb(255, 157, 0)" }} to="/topics">Topics</NavLink>
  </div>
)
const unauthenticatedOptions = (
  <div className="signed-out-nav">
    <NavLink activeStyle={{ color: "rgb(255, 157, 0)" }} to="/sign-in">Sign In</NavLink>
    <NavLink activeStyle={{ color: "rgb(255, 157, 0)" }} to="/sign-up">Sign Up</NavLink>
    <NavLink activeStyle={{ color: "rgb(255, 157, 0)" }} to="/topics">Topics</NavLink>
  </div>
)

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <NavLink exact activeStyle={{ color: "rgb(255, 157, 0)" }} className="site-logo" to="/">Forumtopia</NavLink>
      <div>
        {props.user && <div className="user-welcome">Welcome, <span className="global-username">{props.user.username}</span></div>}
        {props.user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>

  )
}

export default Navbar

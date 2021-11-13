import { NavLink } from 'react-router-dom'
import "./Nav.css"

const authenticatedOptions = (
  <>
    <NavLink to="/threads-create" className="nav-bar-links">Create Thread</NavLink>
    <NavLink to="/sign-out" className="nav-bar-links">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink to="/sign-in" className="nav-bar-links">Sign In</NavLink>
    <NavLink to="/sign-up" className="nav-bar-links">Sign Up</NavLink>
  </>
)

// maybe add posts and threads to here? not sure.
const alwaysOptions = (
  <>
    {/* <NavLink to="/">Home</NavLink> */}
    <NavLink to="/categories" className="nav-bar-links">Categories</NavLink>
  </>
)

export default function MainNavBar(props) {
  return (
    <nav>
      <div className="nav-bar">
        <NavLink className="site-logo" to="/">Forumtopia</NavLink>
        <div className="nav-links">
          {props.user && <div className="user-welcome">Welcome, {props.user.username}</div>}
          {alwaysOptions}
          {props.user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}



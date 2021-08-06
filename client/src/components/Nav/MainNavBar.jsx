// import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navs.css"

const authenticatedOptions = (
  <>
    <NavLink to="/signout">Sign Out</NavLink>
    <NavLink to="/threads-create">Create a Thread</NavLink>

  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink to="/sign-in">Sign In</NavLink>
    <NavLink to="/sign-up">Sign Up</NavLink>
    <NavLink to="/threads"></NavLink>
    {/* <NavLink to="/signout">Sign Out</NavLink> */}
  </>
)

// maybe add posts and threads to here? not sure.
const alwaysOptions = (
  <>
    <NavLink to=""></NavLink>
    <NavLink to=""></NavLink>
  </>
)

const MainNavBar = (props) => {
  return (
    <nav>
      <div className="nav-bar">
        <NavLink className="site-logo" to="/">Forumtopia</NavLink>
        {/* he had classname for the divs underneath, I didn't but put in if you want */}
        <div className="nav-links">
          {props.user && <div>Welcome, {props.user.username}</div>}
          {alwaysOptions}
          {props.user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>

  )
}

// export default function MainNavBar(props) {
//   return (
//         <div className = "menu">
//               <div className = "name">
//               <Link to="/">Forumtopia</Link>
//               </div>
//               <div className="space">
//                 <Link to="/sign-in">Sign In</Link>
//         <Link to="/sign-up">Sign Up</Link>
//         <Link to="signout">Sign Out</Link>
//               </div>
//           </div>
//         )
// }

export default MainNavBar
